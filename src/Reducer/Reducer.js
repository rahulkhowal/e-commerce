import Immutable from 'immutable';

const initialState = Immutable.fromJS(
  {
  	Men:{
  	TopWear:[{}],
  	BottomWear:[{}],
  	Sports:[{}],
  	InnerWear:[{}],
  	FootWear:[{}],
  	SuitsNBlazers:[{}]
  },
  Women:{
  	Indian:[{}],
  	Western:[{}],
  	Sports:[{}],
  	Beauty:[{}],
  	FootWear:[{}],
  	Jewellery:[{}]
  },
  Kids:{
  	InfantB:[{}],
  	InfantG:[{}],
  	BClothing:[{}],
  	GClothing:[{}],
  	BFootWear:[{}],
  	GFootWear:[{}]
  },
  HomeNLiving:{
  	Bed:[{}],
  	Bath:[{}],
  	Furnishing:[{}],
  	HomeDecor:[{}],
  	Kitchen:[{}],
  	Storage:[{}]
  },
  flag1:true,
  flag2:false,
  flag3:false,
  flag4:false
},
);

const first = (state = initialState, action) => {
  return state;
};

export default first;