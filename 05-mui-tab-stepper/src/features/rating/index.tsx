import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': { color: '#ff6d75' },
  '& .MuiRating-iconHover': { color: '#ff3d47' },
});
const labels: { [index: string]: string } = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  8: '8',
  9: '9',
  10: '10',
};
export default function HoverRating(): React.ReactElement {
  const [value, setValue] = React.useState<number | null>(0);
  const [hover, setHover] = React.useState(-1);
  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <StyledRating
        name="loved-rate"
        size="small"
        value={value}
        max={10}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
    </Box>
  );
}
