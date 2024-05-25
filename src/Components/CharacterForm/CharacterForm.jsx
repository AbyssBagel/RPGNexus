import React from 'react'

const CharacterFormHeader = () => {
  return (
    <>
      <form id="formuser">
        <div className="wrapper">
          <div id="step1" className="form-group text-center box1 box">
            <h2 className="d-block">Step 1 : Character Basics</h2>
            <label htmlFor="level">
              <b>Level</b>
            </label>
            <input
              type="number"
              id="level"
              name="level"
              className="form-control"
              min="1"
              max="20"
              defaultValue={1}
            ></input>
            <label htmlFor="race">
              <b>Race</b>
            </label>
            <select id="race" name="race" className="form-control" default="">
              <option disabled selected value>
                {' '}
                -- select a race--{' '}
              </option>
              <option value="human">Human</option>
              <option value="elf">Elf</option>
              <option value="dwarf">Dwarf</option>
            </select>
            <label htmlFor="class">
              <b>Class</b>
            </label>
            <select id="class" name="class" className="form-control" default="">
              <option disabled selected value>
                {' '}
                -- select a class --{' '}
              </option>
              <option value="fighter">Fighter</option>
              <option value="wizard">Wizard</option>
              <option value="paladin">Paladin</option>
              <option value="rogue">Rogue</option>
            </select>

            <label htmlFor="background">
              <b>Background</b>
            </label>
            <select id="background" name="background" className="form-control" default="">
              <option disabled selected value>
                {' '}
                -- select a background --{' '}
              </option>
              <option value="acolyte">Acolyte</option>
              <option value="charlatan">Charlatan</option>
              <option value="criminal">Criminal</option>
              <option value="entertainer">Entertainer</option>
              <option value="folkhero">Folk Hero</option>
              <option value="guildartisan">Guild Artisan</option>
              <option value="noble">Noble</option>
              <option value="outlander">Outlander</option>
              <option value="sage">Sage</option>
              <option value="soldier">Soldier</option>
              <option value="urchin">Urchin</option>
              <option value="hermit">Hermit</option>
            </select>
          </div>
        </div>
      </form>
    </>
  )
}

export default CharacterFormHeader
