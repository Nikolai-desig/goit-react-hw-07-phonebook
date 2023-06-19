import PropTypes from 'prop-types';
import css from './ElementCotact.module.css';

export function ElementContact({ contacts, onDeleteContact }) {
  return (
    <p className={css.element}>
      <span className={css.names}>{contacts.name}:</span>
      <span className={css.number}>{contacts.number}</span>
      <button
        type="button"
        className={css.button}
        onClick={() => onDeleteContact(contacts.id)}
      >
        Delete
      </button>
    </p>
  );
}

ElementContact.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};