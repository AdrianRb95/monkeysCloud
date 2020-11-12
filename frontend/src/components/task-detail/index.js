// Third libs
import React, { useState } from 'react';
import { BsFolder } from 'react-icons/bs';
import { FaShareAlt, FaClock, FaEye, FaPlus } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

// Local
import './style.scss';
import SunEditor from 'suneditor-react';

// Components
import Avatar from '../avatar';
import BreadCrumb from '../breadcrumb';
import Comment from './comment';
import ListItem from './listItem';
import CustomModal from './modal/index';
import Select from './select';

function TaskDetail() {
  const [filter, setFilter] = useState('comments');
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  //use this id to get the data from the backen

  const filterOptions = ['comments', 'history', 'work log'];
  const priority = ['Medium', 'High', 'Highest', 'Lowest'];

  const filterActive = value =>
    value === filter
      ? 'activity-filter activity-filter-active'
      : 'activity-filter';

  const comments = [
    {
      name: 'Josue cordero',
      date: '6 days ago',
      message: 'Check the repository',
    },
    {
      name: 'Jorge Peraza',
      date: '6 days ago',
      message: 'Check the repository',
    },
  ];

  const history = [
    {
      name: 'Jorge Peraza',
      action: 'created the Issue',
      date: 'August 14,2020',
    },
    {
      name: 'Jorge Peraza',
      action: 'updated the Issue',
      date: 'August 14,2020',
      updated: true,
      change: 'MC Sprint 2',
    },
  ];

  const workLog = [
    {
      name: 'Jorge Peraza',
      logged: 'Logged 2w',
      date: 'August 14,2020',
    },
    {
      name: 'Jorge Peraza',
      logged: 'Logged 2w',
      date: 'August 14,2020',
    },
  ];

  const state = ['done', 'in progress'];

  return (
    <main className='monkeys-p-5'>
      <CustomModal
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <div className='project-header'>
        <div className='project-name'>
          <BreadCrumb />
        </div>
        <span className='project-type'>Public</span>
      </div>
      <div className='d-flex task-detail-header-buttons'>
        <span className='task-tag monkeys-text-flame'>Task Tag</span>
        <span className='task-tag-bolder monkeys-text-midnight-blue monkeys-ml-2'>
          Task Tag
        </span>
      </div>
      <div className='d-flex justify-content-end'>
        <button
          onClick={setOpenModal.bind(this, true)}
          className='task-create-branch'
        >
          Create Branch <FaPlus className='monkeys-ml-2' />
        </button>
      </div>
      <div className='d-flex monkeys-mt-3 justify-content-between aling-items-center task-detail-main-header'>
        <h1 className='task-name monkeys-text-dark-blue'>Task Name {id}</h1>
        <div className='d-flex align-items-center'>
          <FaShareAlt className='monkeys-text-gray pointer share-icon ' />
          <button className='task-detail-button d-flex align-items-center justify-content-center'>
            <div
              className='monkeys-bg-secondary-blue position-absolute h-100 w-100 task-detail-button-op'
              style={{ zIndex: 1 }}
            />
            <span className='monkeys-text-special-blue '>Done</span>
          </button>
        </div>
      </div>
      <div className='d-flex monkeys-mt-3 justify-content-between h-100 w-100 task-detail-container'>
        {/* TASK DETAIL ONE */}
        <div className='d-flex flex-column monkeys-bg-white shadow monkeys-p-3 task-detail-one'>
          <span className='task-description monkeys-text-midnight-blue'>
            Task Description
          </span>

          {/* TASK DETAIL CONTENT */}
          <div className='d-flex flex-column monkeys-mt-2'>
            <div className='task-detail-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              maxime commodi tenetur quidem ipsum quia voluptatem perferendis
              in, sunt nesciunt officia molestiae delectus deserunt molestias
              quas assumenda corrupti omnis sit quam! Dolorem expedita quaerat
              cumque recusandae sunt perferendis doloribus maxime labore quidem
              similique, cupiditate quam ullam distinctio laudantium. Nobis
              culpa natus nulla repudiandae nisi odit atque aliquam delectus
              optio blanditiis, possimus excepturi eaque aut sit, ducimus
              accusamus voluptates, voluptatibus tenetur quidem provident! Ab
              tempore similique sint repellendus nulla velit fuga vitae numquam,
              nam sunt eum? Eveniet fuga similique aut doloremque suscipit at
              provident quod officiis iste! Alias dolore culpa eius?
            </div>
            <div className='monkeys-mt-2'>
              <span className='monkeys-text-primary'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                quibusdam harum sunt, aliquid maxime quod.
              </span>
            </div>
          </div>

          {/* TASK DETAIL FOOTER */}
          <div className='d-flex monkeys-mt-3 align-items-center user-select-none pointer'>
            <BsFolder />
            <span className='monkeys-ml-2 monkeys-text-midnight-blue'>
              assets
            </span>
          </div>
          <div className='task-detail-activity'>
            <h4>Activity</h4>
            <div className='task-detail-activity-buttons'>
              <p>
                Show:
                {filterOptions.map((o, i) => (
                  <span
                    className={filterActive(o)}
                    onClick={() => setFilter(o)}
                    key={i}
                  >
                    {' '}
                    {o}
                  </span>
                ))}
              </p>
            </div>

            {filter === 'comments' && (
              <div className='monkeys-fade-in-out'>
                {comments.map((c, i) => (
                  <Comment key={i} comment={c} />
                ))}
                <div className='task-detail-add-comment'>
                  <Avatar />
                  <div className='new-comment'>
                    <SunEditor
                      name='content'
                      height='50'
                      placeholder='Add a comment ....'
                      /* onChange={wikiForm.handleChange}
                    value={wikiForm.values.content} */
                    />
                  </div>
                </div>
              </div>
            )}

            {filter === 'history' && (
              <div className='monkeys-fade-in-out'>
                {history.map(({ name, date, action, updated, change }, i) => (
                  <ListItem
                    key={i}
                    name={name}
                    date={date}
                    info={action}
                    updated={updated}
                    change={change}
                  />
                ))}
              </div>
            )}

            {filter === 'work log' && (
              <div className='monkeys-fade-in-out'>
                {workLog.map(({ name, date, logged }, i) => (
                  <ListItem
                    key={i}
                    name={name}
                    date={date}
                    info={logged}
                    editable
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {/* TASK DETAIL TWO */}
        <div className='d-flex flex-column monkeys-bg-white shadow monkeys-p-3 task-detail-two'>
          <div className='d-flex justify-content-end align-items-center monkeys-mt-2'>
            <FaEye className='watch-icon' />
            <span>1</span>
          </div>
          <div className='monkeys-my-3'>
            <Select options={state} className='select-state' />
          </div>
          <span className='task-detail-two-header'>In Charge</span>
          <div className='d-flex align-items-center monkeys-mt-2'>
            <Avatar />
            <span className='task-detail-username monkeys-ml-2'>
              User Name Last Name
            </span>
          </div>
          <span className='task-detail-two-header monkeys-mt-3'>Reporter</span>
          <div className='d-flex align-items-center monkeys-mt-2'>
            <Avatar />
            <span className='task-detail-username monkeys-ml-2'>
              User Name Last Name
            </span>
          </div>
          <div className='task-details'>
            <div className='task-detail-property'>
              <h5>Labels</h5>
              <span>None</span>
            </div>
            <div className='task-detail-property'>
              <h5>Sprint</h5>
              <span>
                <Link to='/'>MC Sprint 3</Link>
              </span>
            </div>
            <div className='task-detail-property'>
              <h5>Task State</h5>
              <span>MC Sprint 3</span>
            </div>
            <div className='task-detail-property'>
              <h5> Time tracking</h5>
              <span className='detail-tracking'>
                <FaClock className='tracking-icon' />
                <div className='tracking-time'>
                  <hr />
                  <span>2w Logged</span>
                </div>
              </span>
            </div>

            <div className='task-detail-property'>
              <h5> estimated</h5>
              <span>0m</span>
            </div>
            <div className='task-detail-property'>
              <h5>Priority</h5>
              <Select options={priority} className='select-priority ' />
            </div>
            <div className='task-detail-property'>
              <h5>Components</h5>
              <span>None</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TaskDetail;
