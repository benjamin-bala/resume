import './App.css';

function App() {
  return (
    <div className='container grid-cols-3'>
      <div>
        <h2 className='welcome-text'>Hello,</h2>
      </div>
      <div>
        <div className='thumbnail'>
          <img
            src='https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/0x0.jpg?format=jpg&width=1200'
            alt=''
          />
        </div>
        <div className='my-3'>
          <p className='text-medium text-small'>
            I'm a Professional UI Designer, provide awesome design services to
            my client. my vision is to make my client happy and satisfied.
          </p>
        </div>

        <div className='my-3'>
          <h3 className='text-medium'>Skills</h3>
          <div className='my-2'>
            <div className='skill-item my-2'>
              <div className='skill-name text-small'>
                <span className='text-bold'>HTML </span>

                <div className='progress-bar'>
                  <div className='progress-bar-inner'></div>
                </div>
              </div>
            </div>

            <div className='skill-item my-2'>
              <div className='skill-name text-small'>
                <span className='text-bold'>HTML </span>

                <div className='progress-bar'>
                  <div className='progress-bar-inner'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='my-3'>
          <h3 className='text-medium'>Work</h3>
          <div className='my-2'>
            <div>
              <p className='text-small my-1'>Present</p>
              <h3 className='text-large'>Soft Net Inc</h3>
              <h6 className='text-small'>Creative Head</h6>
              <p className='text-small my-1'>
                lorem ipsum dolor set ipsum limur latin laye, lorem ipsum dolor
                set ipsum limur latin laye, lorem ipsum dolor set ipsum limur
                latin laye
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Tet</h2>
      </div>
    </div>
  );
}

export default App;
