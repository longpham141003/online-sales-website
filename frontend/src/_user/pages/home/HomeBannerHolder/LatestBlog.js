import React, { useState } from 'react';
import '../../../../assets/css/user/home.css';
import '../../../../assets/js/home.js';
const LatestBlog = () => (  
  <div className="latest-blog" data-aos="fade-up">
  <h2 className="section-title">LATEST FORM BLOG</h2>
  <div className="blog-container">
    <div className="blog-post">
      <img src="assets\images\blog-post\post1.jpg" alt="Blog 1" />
      <h3>Voluptatem accusantium doloremque laudantium</h3>
      <p className="blog-meta">By Jone Doe | 21 March 2016</p>
      <p>
        Sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
      <button className="read-more">Read more</button>
    </div>
    <div className="blog-post">
      <img src="assets\images\blog-post\post2.jpg" alt="Blog 2" />
      <h3>Dolorem eum fugiat quo voluptas nulla pariatur</h3>
      <p className="blog-meta">By Saraha Smith | 21 March 2016</p>
      <p>
        Sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
      <button className="read-more">Read more</button>
    </div>
  </div>
</div>

);

export default LatestBlog;
