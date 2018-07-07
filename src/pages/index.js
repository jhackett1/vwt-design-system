import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1 className="page-title">Getting started</h1>
    <p><strong>This is a templating system for rapidly building landing pages.</strong></p>
    <p>It's powered by React and the Gatsby static site generator.</p>
    <p>You can supply content by editing <a href="https://reactjs.org/docs/introducing-jsx.html" rel="nofollow">JSX</a> and alter the look and feel of the site with <a href="https://sass-lang.com/" rel="nofollow">SASS</a> variables.</p>
    <p>You will end up with static HTML, CSS and JS files, which can be made available online with any low-cost (or even free) web host.</p>
    <Link className="button" to="/blocks">Go to list of blocks</Link>
    <h2>Requirements</h2>
    <p>To develop with this system, you need the following:</p>
    <ul>
      <li>Node and NPM</li>
      <li>Gatsby. Get it with <code>npm i --g gatsby-cli</code> if needed</li>
    </ul>
    <h2>Hosting</h2>
    <p>Everything will be built into the <code>/public</code> folder.</p>
    <p>You can host the contents of this for free on Github Pages, Netlify, or pass them to a client to use on their own hosting.</p>
    <h2>Creating and editing pages</h2>
    <p>To build or edit a landing page, you'll need to start a development server.</p>
    <p>Do this with the command</p>
    <p><code>gatsby develop</code></p>
    <p>The only files you need to edit are in <code>/src/pages</code>. There are four files in there:</p>
    <ul>
      <li>
        <code>index.js</code> defines the layout and content of your landing page. <a href="https://github.com/jhackett1/vwt-landing/wiki/List-of-blocks">See how to edit this</a>.</li>
        <li>
          <code>config.js</code> defines the site title, Google Analytics tracking ID and other low-level configuration</li>
          <li>
            <code>variables.sass</code> defines the colour scheme and other presentational aspects of your site</li>
            <li>
              <code>custom.sass</code> allows you to customise how the site looks by writing your own SASS</li>
            </ul>
            <p>This system offers fifteen blocks - reusable layout elements you can place in any order and insert your own content into by editing <code>index.js</code>.</p>
            <p>When you're happy with your changes, produce the final <code>/public</code> folder by running</p>
            <p><code>gatsby build</code></p>
            <h2>Static assets</h2>
            <p>You may want to host static assets on a site, particularly images and documents. Place these files into the <code>/static</code> folder. They will be copied across to the final build.</p>
            <p>If you place <code>test.pdf</code> into the folder, it will eventually be available at the URL <code>/test.pdf</code>.</p>

  </div>
)

export default IndexPage
