// src/app/settings/page.tsx
const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <form>
        <label>
          Example Setting:
          <input type="text" name="setting" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;
