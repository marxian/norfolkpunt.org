/* eslint-env node, es6 */
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./sqlite.db')
var fs = require('fs')
var path = require('path')
var yaml = require('js-yaml')

var startQuery = [
  'SELECT localboats_boat.name as name, loa, year_built, handicap, sail_number, slug, previous_names,',
  'localboats_boatbuilder.name as builder,',
  'localboats_construction.name as construction,',
  'localboats_design.name as design,',
  'localboats_designer.name as designer',
  'FROM localboats_boat',
  'INNER JOIN localboats_construction ON localboats_boat.construction_id=localboats_construction.id',
  'INNER JOIN localboats_boatbuilder ON localboats_boat.builder_id=localboats_boatbuilder.id',
  'INNER JOIN localboats_design ON localboats_boat.design_id=localboats_design.id',
  'INNER JOIN localboats_designer ON localboats_design.designer_id=localboats_designer.id;',
].join(' ')

var ownershipQuery = [
  'SELECT ',
  'localboats_ownership.owned_from as "from",',
  'localboats_ownership.owned_to as "to",',
  'localboats_person.name as owner',
  'FROM localboats_ownership',
  'INNER JOIN localboats_boat ON localboats_ownership.boat_id=localboats_boat.id',
  'INNER JOIN localboats_person ON localboats_ownership.owner_id=localboats_person.id',
  'WHERE localboats_boat.slug = $slug',
  'ORDER BY localboats_ownership.owned_from desc',
].join(' ')

function write(boat) {
  boat.category = 'boats'
  var out = {
    ...boat,
    sailNumber: boat.sail_number,
    yearBuilt: boat.year_built,
    previousNames: boat.previous_names,
    category: 'boats',
  }
  delete out.previous_names
  delete out.year_built
  delete out.sail_number
  if (!out.previousNames) {
    delete out.previousNames
  }

  var yml = yaml.safeDump(out)
  fs.writeFile(
    path.join(__dirname, '..', 'boats', out.slug + '.md'),
    `---\n${yml}\n---\n`,
    function(err) {
      if (err) {
        return console.error(err)
      }
    }
  )
}

db.each(startQuery, function(err, row) {
  if (err) {
    return console.error(err)
  }
  var boat = row
  var db2 = new sqlite3.Database('./sqlite.db')
  db2.all(ownershipQuery, { $slug: row.slug }, function(err, owns) {
    if (err) {
      return console.error(err)
    }
    boat.owners = owns
    write(boat)
  })
  db2.close()
})

db.close()
