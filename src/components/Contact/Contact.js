import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='container' id='contact'>
        <h2>Kontak Kami</h2>
        <div className='row100'>
          <div className='col'>
            <div className='inputBox'>
              <input type='text' name='' required />
              <span className='text'>Nama Depan</span>
              <span className='line'></span>
            </div>
          </div>
          <div className='col'>
            <div className='inputBox'>
              <input type='text' name='' required />
              <span className='text'>Nama Belakang</span>
              <span className='line'></span>
            </div>
          </div>
        </div>
        <div className='row100'>
          <div className='col'>
            <div className='inputBox'>
              <input type='text' name='' required />
              <span className='text'>Email</span>
              <span className='line'></span>
            </div>
          </div>
          <div className='col'>
            <div className='inputBox'>
              <input type='text' name='' required />
              <span className='text'>No Telepon</span>
              <span className='line'></span>
            </div>
          </div>
        </div>
        <div className='row100'>
          <div className='col'>
            <div className='inputBox textarea'>
              <textarea required></textarea>
              <span className='text'>Pesan</span>
              <span className='line'></span>
            </div>
          </div>
        </div>
        <div className='row100'>
          <div className='col'>
            <input type='submit' value='Kirim' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
