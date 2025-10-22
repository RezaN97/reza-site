import React, { useState } from 'react';

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Trigger */}
      <ul>
        <li
          className="cursor-pointer hover:text-blue-500"
          onClick={() => setShowModal(true)}
        >
          Hubungi Kami
        </li>
      </ul>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-2">Contact Person</h2>
            <p className="mb-4">📞 WhatsApp: +62 XXXXXXXXXXX</p>
            <p className="mb-4">📧 Email: chillmovie@project.com</p>
            <button
              className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setShowModal(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
