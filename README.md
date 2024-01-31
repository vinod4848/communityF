# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- this is my code mehfooz khan -->

```js
// this is advance search

import React from "react";

function Directory_Search() {
  return (
    <div className="font-sans my-5 w-full">
      <div className="head py-10 px-16 bg-gray-600">
        <h3 className=" text-uppercase text-white font-medium tracking-normal">
          find a member
        </h3>
      </div>
      <div className="info w-[90%] m-auto  text-[16px] font-normal">
        <div className="h4_text py-2">
          <h6>locate a BNI member in any of our chapter worldwide</h6>
        </div>
        {/* 1387bd     E5E4E2*/}
        <div className="btn_input   text-[16px] font-medium">
          <div className="btn_section">
            <button className="simp_btn capitalize text-white bg-[#1387bd] font-light  px-6 py-3 max-sm:w-[50%]">
              simple search
            </button>
            <button className="adv_btn capitalize text-black bg-[#E5E4E2] font-light px-6 py-3 max-sm:w-[50%]">
              advance search
            </button>
          </div>
          {/* bg-[#E5E4E2] */}
          <form className="input_section grid grid-cols-2 max-sm:grid-cols-1 gap-3 bg-[#E5E4E2]  w-full  px-4 py-7 text-[12px] font-normal">
            <div className="first flex flex-col gap-1">
              <div className="input_child_1 ">
                <label htmlFor="" className="label_1 uppercase">
                  community area
                </label>
                <select
                  className="input_1 w-full p-1 rounded-3xl"
                  name=""
                  id=""
                ></select>
              </div>

              <div className="input_child_2">
                <label htmlFor="" className="label_2 uppercase">
                  city
                </label>
                <select
                  className="input_1 w-full p-1 rounded-3xl"
                  name=""
                  id=""
                ></select>
              </div>

              <div className="input_child_3 ">
                <label htmlFor="" className="label_3 uppercase">
                  area
                </label>
                <select
                  className="input_1 w-full p-1 rounded-3xl"
                  name=""
                  id=""
                ></select>
              </div>
            </div>
            {/* flex div end */}
            <div className="second  grid grid-cols-2 gap-1 ">
              <div className="input_child_3 ">
                <label htmlFor="" className="label_3 uppercase">
                  first name
                </label>
                <input type="text" className="input_3 w-full p-1 " />
              </div>

              <div className="input_child_3 ">
                <label htmlFor="" className="label_3 uppercase">
                  last name
                </label>
                <input type="text" className="input_3 w-full p-1 " />
              </div>

              <div className="input_child_3 ">
                <label htmlFor="" className="label_3 uppercase">
                  keywords
                </label>
                <input type="text" className="input_3 w-full p-1 " />
              </div>

              <div className="input_child_3 ">
                <label htmlFor="" className="label_3 uppercase">
                  company
                </label>
                <input type="text" className="input_3 w-full p-1 " />
              </div>
            </div>

            <div className="btn_search">
              <button className="bg-[#1387bd] font-light text-white capitalize px-4 py-2 rounded-3xl ">
                search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Directory_Search;
```
