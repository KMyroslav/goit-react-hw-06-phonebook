import propTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../redux/actions";

function ContactList({ contacts, filter, deleteContact }) {
  return (
    <div>
      {contacts
        .filter((obj) => obj.name.toLowerCase().includes(filter.toLowerCase()))
        .map((e) => (
          <p key={e.id}>
            {e.name}: {e.number}
            <button
              type="button"
              data-id={e.id}
              onClick={() => {
                deleteContact(e.id);
              }}
            >
              Delete
            </button>
          </p>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
    setFilter: (filter) => dispatch(actions.setFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  filter: propTypes.string.isRequired,
  deleteContact: propTypes.func.isRequired,
};
