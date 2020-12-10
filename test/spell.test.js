const assert = require("assert");

const pg = require("pg");
const Pool = pg.Pool;
const connectionString = process.env.DATABASE_URL || 'postgresql://codex:codex123@localhost:5432/fingerspelldata';
const pool = new Pool({
  connectionString
});
const Spell = require("../fingerSpell");
let spell = Spell(pool);

describe("Should test the functions in Waiters that are returning values",async function () {
  it("Should add the day ID of Monday , Tuesday and Wednesday as well as the waiter ID into the database.",async  function () {
console.log(await spell.level1())
})
})
