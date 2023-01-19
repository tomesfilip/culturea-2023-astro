import { contactItems } from '../../data/footerItems';

import ContactItem from './ContactItem';

const ContactList = () => {
  return (
    <div className="grid grid-cols-1 contact-container gap-y-4 xl:gap-y-16 xl:grid-cols-2 xl:gap-x-32">
      {contactItems.map(({ contactName, contactMail }) => (
        <ContactItem
          key={contactMail}
          contactName={contactName}
          contactMail={contactMail}
        />
      ))}
    </div>
  );
};

export default ContactList;
