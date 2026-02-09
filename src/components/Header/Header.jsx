export const Header = ({ filterBy, querry }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search movie
    </label>
    <div className="control">
      <input
        value={querry}
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        onChange={event => filterBy(event.currentTarget.value)}
      />
    </div>
  </div>
);
