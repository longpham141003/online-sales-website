import React from "react";
import '../../../assets/css/admin/personnelmanagement.css';
import Button from "../../components/button";
import ActionToolbar from "../../components/ActionToolbar";
import Panigation from "../../components/Panigation";
// import AdminMain from "../../AdminMain";

const PersonnelManagement = () => {
  return (
    <>
      <Button label="Thêm nhân viên"/>
      <div className="body-content">
        <ActionToolbar/>
        <div className="data-content">
  <table>
    <thead>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        <th>ID nhân viên</th>
        <th>Họ và tên</th>
        <th>Ảnh thẻ</th>
        <th>Địa chỉ</th>
        <th>Ngày sinh</th>
        <th>Giới tính</th>
        <th>SĐT</th>
        <th>Chức vụ</th>
        <th>Tính năng</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>#CD12837</td>
        <td>Hồ Thị Thanh Ngân</td>
        <td>
          <img src="https://via.placeholder.com/40" alt="Ảnh thẻ" />
        </td>
        <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh</td>
        <td>12/02/1999</td>
        <td>Nữ</td>
        <td>0926737168</td>
        <td>Bán hàng</td>
        <td>
          <button className="btn btn-delete">
            <i className="fas fa-trash" />
          </button>
          <button className="btn btn-edit">
            <i className="fas fa-edit" />
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>#CD12837</td>
        <td>Hồ Thị Thanh Ngân</td>
        <td>
          <img src="https://via.placeholder.com/40" alt="Ảnh thẻ" />
        </td>
        <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh</td>
        <td>12/02/1999</td>
        <td>Nữ</td>
        <td>0926737168</td>
        <td>Bán hàng</td>
        <td>
          <button className="btn btn-delete">
            <i className="fas fa-trash" />
          </button>
          <button className="btn btn-edit">
            <i className="fas fa-edit" />
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>#CD12837</td>
        <td>Hồ Thị Thanh Ngân</td>
        <td>
          <img src="https://via.placeholder.com/40" alt="Ảnh thẻ" />
        </td>
        <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh</td>
        <td>12/02/1999</td>
        <td>Nữ</td>
        <td>0926737168</td>
        <td>Bán hàng</td>
        <td>
          <button className="btn btn-delete">
            <i className="fas fa-trash" />
          </button>
          <button className="btn btn-edit">
            <i className="fas fa-edit" />
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>#CD12837</td>
        <td>Hồ Thị Thanh Ngân</td>
        <td>
          <img src="https://via.placeholder.com/40" alt="Ảnh thẻ" />
        </td>
        <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh</td>
        <td>12/02/1999</td>
        <td>Nữ</td>
        <td>0926737168</td>
        <td>Bán hàng</td>
        <td>
          <button className="btn btn-delete">
            <i className="fas fa-trash" />
          </button>
          <button className="btn btn-edit">
            <i className="fas fa-edit" />
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>#CD12837</td>
        <td>Hồ Thị Thanh Ngân</td>
        <td>
          <img src="https://via.placeholder.com/40" alt="Ảnh thẻ" />
        </td>
        <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh</td>
        <td>12/02/1999</td>
        <td>Nữ</td>
        <td>0926737168</td>
        <td>Bán hàng</td>
        <td>
          <button className="btn btn-delete">
            <i className="fas fa-trash" />
          </button>
          <button className="btn btn-edit">
            <i className="fas fa-edit" />
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>#CD12837</td>
        <td>Hồ Thị Thanh Ngân</td>
        <td>
          <img src="https://via.placeholder.com/40" alt="Ảnh thẻ" />
        </td>
        <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh</td>
        <td>12/02/1999</td>
        <td>Nữ</td>
        <td>0926737168</td>
        <td>Bán hàng</td>
        <td>
          <button className="btn btn-delete">
            <i className="fas fa-trash" />
          </button>
          <button className="btn btn-edit">
            <i className="fas fa-edit" />
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>#CD12837</td>
        <td>Hồ Thị Thanh Ngân</td>
        <td>
          <img src="https://via.placeholder.com/40" alt="Ảnh thẻ" />
        </td>
        <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh</td>
        <td>12/02/1999</td>
        <td>Nữ</td>
        <td>0926737168</td>
        <td>Bán hàng</td>
        <td>
          <button className="btn btn-delete">
            <i className="fas fa-trash" />
          </button>
          <button className="btn btn-edit">
            <i className="fas fa-edit" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
      <Panigation/>
    </>
  );
};

export default PersonnelManagement;
