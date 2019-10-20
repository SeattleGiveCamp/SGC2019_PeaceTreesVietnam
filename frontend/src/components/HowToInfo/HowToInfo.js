import './how-to-info.scss';
import React from 'react';

export default class Howto extends React.Component {
  render() {
    return (
      <div className='manual'>
        <h1>User Manual</h1>
        <div>
          <h2>Page URLs</h2>
          <p>
            If a page url is added when a new project is added to the database
            the 'Learn More' button will be available when a user clicks on one
            of the map project icons. If a page for a project does not currently
            exist, it can be added later from the table view by clicking on the
            edit button.
          </p>
          {/*TODO: insert a screenshot of on both modals. One without and one with a learn more button  */}
          <section id='learnmore-screenshot'>
            <figure>
              <img
                src='https://via.placeholder.com/650'
                alt='modal without learn more button'
              />
              <figcaption>
                Project information modal without a learn more button
              </figcaption>
            </figure>
            <figure>
              <img
                src='https://via.placeholder.com/650'
                alt='modal with a learn more button'
              />
              <figcaption>
                Project information modal with a learn more button
              </figcaption>
            </figure>
          </section>

          <h3>Getting the Page URL</h3>
          <p>
            Step 1: Go to{' '}
            <a href='https://www.peacetreesvietnam.org/'>
              PeaceTrees VietNam Homepage
            </a>{' '}
            and navigate to the desired project page.
          </p>
          <p>
            Step 2: While on the project page click in the webpage address bar.
          </p>
          <section className='full-width-container'>
            <figure className='single-image'>
              <img
                src='https://i.imgur.com/6l57MS5.png'
                alt='example project page with a highlighted url'
              />
              <figcaption>
                Example project page with the page url highlighted
              </figcaption>
            </figure>
          </section>
          <p>Step 3: Select the entire page address.</p>
          <p className='note'>
            Note: You can use keyboard shortcuts CMD + A (MAC computer) or CTRL
            + A (PC computer) to select all.
          </p>
          <p>Step 4: Copy the url</p>
          <p className='note'>
            Note: You can use keyboard shortcuts CMD + C (MAC computer) or CTRL
            + C (PC computer) to select all.
          </p>
          <p>
            Step 5: Paste the url into the page url field in the add project
            form or update an existing project from the table.
          </p>
          <section className='full-width-container form-img-container'>
            <figure className='single-image'>
              <img
                id='form-img'
                src='https://i.imgur.com/d0DGHRf.png'
                alt='form example'
              />
              <figcaption>
                Empty form example showing page and image url fields
              </figcaption>
            </figure>
          </section>
          <section>
            {/* <figure>
              <img
                src='https://via.placeholder.com/950'
                alt='Edit a project url from the table'
              />
              <figcaption>
                Page urls can be added on the table view page.
              </figcaption>
            </figure> */}
          </section>
        </div>
        <div>
          <h2>Image URLs</h2>
          <p>
            If an image url is added when a new project is added to the database
            the image will appear in the modal when a user clicks on one of the
            map project icons. If a page containing images for a project does
            not currently exist, it can be added later from the table view by
            clicking on the edit button.
          </p>
          {/*TODO: insert a screenshot of on both modals. One without and one with a learn more button  */}
          <section id='learnmore-screenshot'>
            <figure>
              <img
                src='https://via.placeholder.com/650'
                alt='modal without an image'
              />
              <figcaption>
                Project information modal without a project image
              </figcaption>
            </figure>
            <figure>
              <img
                src='https://via.placeholder.com/650'
                alt='modal with an image'
              />
              <figcaption>
                Project information modal with a project image
              </figcaption>
            </figure>
          </section>
          <h3>Getting the image URL</h3>
          <p>
            Step 1: Go to{' '}
            <a href='https://www.peacetreesvietnam.org/'>
              PeaceTrees VietNam Homepage
            </a>{' '}
            and navigate to the desired project page.
          </p>
          <p>
            Step 2: While on the project page scroll down until you see the
            desired project image.
          </p>
          <section className='full-width-container'>
            <figure className='single-image'>
              <img
                src='https://i.imgur.com/iD2rOSO.png'
                alt='example project page with project images'
              />
              <figcaption>
                Example project page showing image options.
              </figcaption>
            </figure>
          </section>
          <p>
            Step 3: Choose one of the project images that you would like to be
            displayed when the user clicks a project icon
          </p>
          <p>Step 4: Right Click on the Image</p>
          <p className='note'>Note: CTRL + click for MAC users.</p>
          <section className='full-width-container form-img-container'>
            <figure className='single-image'>
              <img
                id='form-img'
                src='https://i.imgur.com/tustqtm.png'
                alt='form example'
              />
              <figcaption>
                Menu that appears when you right click on the image
              </figcaption>
            </figure>
          </section>
          <p>Step 5: Select Copy Image Address</p>
          <div className='note'>
            <p>Note: Here is an example of what the url should look like...</p>
            <p id='example'>
              https://cdn.firespring.com/images/224ad815-d07f-48db-a5a8-0cf718e674e5.jpg?size=thumbnail&token=4c60e995248c65d8a66310613eb9f329
            </p>
          </div>
          <p>
            Step 6: Paste the image URL into the new project form or add it to
            an existing project from the project table
          </p>
          <section className='full-width-container form-img-container'>
            <figure className='single-image'>
              <img
                id='form-img'
                src='https://i.imgur.com/d0DGHRf.png'
                alt='form example'
              />
              <figcaption>
                Empty form example showing page and image url fields
              </figcaption>
            </figure>
          </section>
          <section>
            {/* <figure>
              <img
                src='https://via.placeholder.com/950'
                alt='Edit a project url from the table'
              />
              <figcaption>
                Page urls can be added on the table view page.
              </figcaption>
            </figure> */}
          </section>
        </div>
        <div>
          <h2>Getting a MapBox Token</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tempor nunc at nulla auctor suscipit. Etiam turpis neque, malesuada
            ut mi a, dapibus tempor ipsum. Sed congue neque non erat iaculis, in
            congue risus viverra. Nunc ac vulputate est, at consequat turpis.
            Suspendisse blandit ut enim a vestibulum. Phasellus eu sapien vel
            metus lacinia commodo porttitor a mauris. Donec ut felis eleifend,
            ullamcorper lorem non, gravida neque. Nam vel tincidunt tellus.
            Donec laoreet sapien nec tempor pulvinar. Aliquam lorem neque,
            placerat non enim vitae, faucibus convallis odio. Duis pharetra
            semper purus quis vehicula. Integer congue vehicula tempus. Quisque
            lorem arcu, efficitur id lectus sed, suscipit tristique nisl.
          </p>
        </div>
      </div>
    );
  }
}
