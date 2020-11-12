// Third libs
import React from 'react';
import SunEditor from 'suneditor-react'; //Imports Sun Editor installed via npm // Import Sun Editor's CSS File
import 'suneditor/dist/css/suneditor.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Local --Imports the scss file contained in the wikiSection folder
import './style.scss';

const WikiSection = () => {
  //Build of the constant that will be export
  const wikiForm = useFormik({
    initialValues: {
      title: '',
      content: '',
      message: '',
    },
    validationSchema: Yup.object({
      //Validation didn't work must check this issue
      //title: Yup.string().title("You must fill in this field").min(8, "add a title to your page").required().label("title"),
    }),
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='wikiContainer'>
      <form onSubmit={wikiForm.handleSubmit}>
        <div className=''>
          <h1 className='titleHeader'>Create new page</h1>
        </div>
        <div className=''>
          <input
            className='titlebox input-block'
            type='text'
            id='title'
            name='title'
            placeholder='Title'
            onChange={wikiForm.handleChange}
            value={wikiForm.values.title}
          ></input>
        </div>
        <div className='editor'>
          {/*
                    --usage of the imported class SunEditor from suneditor-react,
                    this tag loads a WYSIWYG but attributes such as width, height, etc
                    can't be set on the scss file.
                */}
        <SunEditor
          name='content'
          className='input-block'
          height='300'
          placeholder='Please add your content here...'
          onChange={wikiForm.handleChange}
          value={wikiForm.values.content}
        />
        </div>
        <div>
          <p className='smallTitle'>Edit message</p>
          <input
            className='smallMessage input-block'
            type='text'
            id='message'
            name='message'
            placeholder='Write a small message here explaining this change. (Optional)'
            onChange={wikiForm.handleChange}
            value={wikiForm.values.message}
          ></input>
        </div>
        <div className=''>
          <button className='btnSave' type='submit'>
            Save Page
          </button>
        </div>
      </form>
    </div>
  );
};

export default WikiSection;
