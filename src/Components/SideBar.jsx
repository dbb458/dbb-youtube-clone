import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => {
        const { name, icon } = category;

        return (
          <button
            key={name}
            className='category-btn'
            style={{
              background: name === selectedCategory && '#107cf1',
              color: '#fff',
            }}
            onClick={() => setSelectedCategory(name)}
          >
            <span
              style={{
                color: name === selectedCategory ? '#fff' : '#308EF3',
                marginRight: '10px',
              }}
            >
              {icon}
            </span>
            <span style={{ opacity: name === selectedCategory ? '1' : '0.8' }}>
              {name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
