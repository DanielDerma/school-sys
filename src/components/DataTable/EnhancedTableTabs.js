import { Tab, Tabs, Toolbar } from "@mui/material";

const EnhancedTableTabs = ({ query, tabsAdmin, changeQuery, change }) => {
  const handleClickTabs = (e, newValue) => {
    changeQuery(newValue);
    change(newValue);
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Tabs value={query} onChange={handleClickTabs} centered>
        {tabsAdmin.map((tab) => (
          <Tab label={tab.title} key={tab.hash} value={tab.hash} />
        ))}
      </Tabs>
    </Toolbar>
  );
};

export default EnhancedTableTabs;
