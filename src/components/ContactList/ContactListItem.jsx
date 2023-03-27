import PropTypes from 'prop-types';

export const ContactListItem = ({ contact: { name, number } }) => {
  return (
    <p>
      {name}: {number}
    </p>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
