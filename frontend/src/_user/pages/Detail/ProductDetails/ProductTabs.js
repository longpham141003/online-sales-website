import React, { useState } from 'react';
import '../../../../assets/css/user/detail.css';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="detail-tab-container">
      <div className="detail-tab-left">
        <ul className="detail-tab-list">
          <li
            className={`detail-tab-item ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => openTab('description')}
          >
            <b>MÔ TẢ</b>
          </li>
          <li
            className={`detail-tab-item ${activeTab === 'review' ? 'active' : ''}`}
            onClick={() => openTab('review')}
          >
            ĐÁNH GIÁ
          </li>
          <li
            className={`detail-tab-item ${activeTab === 'tags' ? 'active' : ''}`}
            onClick={() => openTab('tags')}
          >
            TAGS
          </li>
        </ul>
      </div>
      <div className="detail-tab-right">
        <div id="description" className={`detail-tab-content ${activeTab === 'description' ? 'active' : ''}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
        <div id="review" className={`detail-tab-content ${activeTab === 'review' ? 'active' : ''}`}>
          <b>Customer Reviews</b>
          <div className="detail-review">
            <i>
              We love this product <span>1 days ago</span>
            </i>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              suscipit."
            </p>
          </div>
          <div className="detail-review-form">
            <p>Write your own review</p>
            <table className="detail-rating-table">
              <thead>
                <tr>
                  <th />
                  <th>1 star</th>
                  <th>2 stars</th>
                  <th>3 stars</th>
                  <th>4 stars</th>
                  <th>5 stars</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Quality</td>
                  <td>
                    <input type="radio" name="quality" defaultValue={1} />
                  </td>
                  <td>
                    <input type="radio" name="quality" defaultValue={2} />
                  </td>
                  <td>
                    <input type="radio" name="quality" defaultValue={3} />
                  </td>
                  <td>
                    <input type="radio" name="quality" defaultValue={4} />
                  </td>
                  <td>
                    <input type="radio" name="quality" defaultValue={5} />
                  </td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>
                    <input type="radio" name="price" defaultValue={1} />
                  </td>
                  <td>
                    <input type="radio" name="price" defaultValue={2} />
                  </td>
                  <td>
                    <input type="radio" name="price" defaultValue={3} />
                  </td>
                  <td>
                    <input type="radio" name="price" defaultValue={4} />
                  </td>
                  <td>
                    <input type="radio" name="price" defaultValue={5} />
                  </td>
                </tr>
                <tr>
                  <td>Value</td>
                  <td>
                    <input type="radio" name="value" defaultValue={1} />
                  </td>
                  <td>
                    <input type="radio" name="value" defaultValue={2} />
                  </td>
                  <td>
                    <input type="radio" name="value" defaultValue={3} />
                  </td>
                  <td>
                    <input type="radio" name="value" defaultValue={4} />
                  </td>
                  <td>
                    <input type="radio" name="value" defaultValue={5} />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="detail-review-fields">
              <label htmlFor="name">Your Name *</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="summary">Summary *</label>
              <input type="text" id="summary" name="summary" required />
              <label htmlFor="review">Review *</label>
              <textarea id="review" name="review" required />
            </div>
            <button type="submit">Submit Review</button>
          </div>
        </div>
        <div id="tags" className={`detail-tab-content ${activeTab === 'tags' ? 'active' : ''}`}>
          <p>Tags content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
