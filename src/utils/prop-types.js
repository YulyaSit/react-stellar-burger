import PropTypes from "prop-types";

export const ingredientPropType = PropTypes.shape({
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  __v: PropTypes.number.isRequired
});
