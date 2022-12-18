export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: 700,
    lineHeight: 1.17,
    color: '#9B9FAA',
    backgroundColor: state.isFocused ? 'Orange' : 'white',
    '&:hover': {
      backgroundColor: state.isFocused ? 'Orange' : 'white',
      color: 'white',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#9B9FAA',
  }),
  control: () => ({
    width: 240,
    '@media only screen and (max-width: 767px)': {
      width: 280,
    },
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  container: provided => ({
    ...provided,
    borderBottom: '1px solid #e0e0e0',
    position: 'relative',
  }),
  valueContainer: provided => ({
    ...provided,
    marginBottom: 0,
    padding: 0,
  }),

  placeholder: (provided, state) => ({
    ...provided,
    textAlign: 'left',
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#9B9FAA',
    display: state.isFocused && 'none',
    bottom: !state.isFocused && '4px',
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),

  input: provided => ({
    ...provided,
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#9B9FAA',
    height: '48px',
  }),
};
