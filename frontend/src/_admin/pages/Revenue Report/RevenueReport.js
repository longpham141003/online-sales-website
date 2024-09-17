import React from "react";
import '../../../assets/css/admin/revenuereport.css';
// import AdminMain from "../../AdminMain";

const RevenueReport = () => {
  return (
    <>
      <div className="body-content">
        <div className="revenue">
          <div className="info-revenue">
            <div className="item">
              <i className="fas fa-user-circle" />
              <div className="info-text">
                <h4>TỔNG NHÂN VIÊN</h4>
                <span>26 nhân viên</span>
              </div>
            </div>
            <div className="item">
              <i className="fas fa-tags" />
              <div className="info-text">
                <h4>TỔNG SẢN PHẨM</h4>
                <span>8580 sản phẩm</span>
              </div>
            </div>
            <div className="item">
              <i className="fas fa-shopping-bag" />
              <div className="info-text">
                <h4>TỔNG ĐƠN HÀNG</h4>
                <span>457 đơn hàng</span>
              </div>
            </div>
            <div className="item">
              <i className="fas fa-ban" />
              <div className="info-text">
                <h4>BỊ CẤM</h4>
                <span>4 nhân viên</span>
              </div>
            </div>
            <div className="item">
              <i className="fas fa-dollar-sign" />
              <div className="info-text">
                <h4>TỔNG THU NHẬP</h4>
                <span>104.890.000 đ</span>
              </div>
            </div>
            <div className="item">
              <i className="fas fa-user-plus" />
              <div className="info-text">
                <h4>NHÂN VIÊN MỚI</h4>
                <span>3 nhân viên</span>
              </div>
            </div>
            <div className="item">
              <i className="fas fa-times-circle" />
              <div className="info-text">
                <h4>HẾT HÀNG</h4>
                <span>1 sản phẩm</span>
              </div>
            </div>
            <div className="item">
              <i className="fas fa-trash" />
              <div className="info-text">
                <h4>ĐƠN HÀNG HỦY</h4>
                <span>2 đơn hàng</span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-selling">
          <h3 className="section-title">SẢN PHẨM BÁN CHẠY</h3>
          <table className="selling-table">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th>Danh mục</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>71309005</td>
                <td>Bàn ăn gỗ Theresa</td>
                <td>5.600.000 đ</td>
                <td>Bàn ăn</td>
              </tr>
              <tr>
                <td>62304003</td>
                <td>Bàn ăn Vitali mặt đá</td>
                <td>33.235.000 đ</td>
                <td>Bàn ăn</td>
              </tr>
              <tr>
                <td>72109004</td>
                <td>Ghế làm việc Zuno</td>
                <td>3.800.000 đ</td>
                <td>Ghế gỗ</td>
              </tr>
              <tr>
                <td>83826226</td>
                <td>Tủ ly - tủ bát</td>
                <td>2.450.000 đ</td>
                <td>Tủ</td>
              </tr>
              <tr>
                <td>71304041</td>
                <td>Bàn ăn mở rộng Vegas</td>
                <td>21.550.000 đ</td>
                <td>Bàn thông minh</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="total-order">
          <h3 className="section-title">TỔNG ĐƠN HÀNG</h3>
          <table className="order-table">
            <thead>
              <tr>
                <th>ID đơn hàng</th>
                <th>Khách hàng</th>
                <th>Đơn hàng</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MD0837</td>
                <td>Triệu Thanh Phú</td>
                <td>Ghế làm việc Zuno, Bàn ăn gỗ Theresa</td>
                <td>2 sản phẩm</td>
                <td>9.400.000 đ</td>
              </tr>
              <tr>
                <td>MB8265</td>
                <td>Nguyễn Thị Ngọc Cầm</td>
                <td>Ghế ăn gỗ Lucy màu trắng</td>
                <td>1 sản phẩm</td>
                <td>3.800.000 đ</td>
              </tr>
              <tr>
                <td>MT9835</td>
                <td>Đặng Hoàng Phúc</td>
                <td>
                  Giường ngủ Jimmy, Bàn ăn mở rộng cao cấp Dolas, Ghế làm việc Zuno
                </td>
                <td>3 sản phẩm</td>
                <td>40.650.000 đ</td>
              </tr>
              <tr>
                <td>ER3835</td>
                <td>Nguyễn Thị Mỹ Yến</td>
                <td>Bàn ăn mở rộng Gepa</td>
                <td>1 sản phẩm</td>
                <td>16.770.000 đ</td>
              </tr>
              <tr>
                <td>AL3947</td>
                <td>Phạm Thị Ngọc</td>
                <td>Bàn ăn Vitali mặt đá, Ghế ăn gỗ Lucy màu trắng</td>
                <td>2 sản phẩm</td>
                <td>19.770.000 đ</td>
              </tr>
              <tr>
                <td>QY8723</td>
                <td>Ngô Thái An</td>
                <td>Giường ngủ Kara 1.6x2m</td>
                <td>1 sản phẩm</td>
                <td>14.500.000 đ</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>
                  <strong>Tổng cộng:</strong>
                </td>
                <td>
                  <strong>104.890.000 đ</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="product-sold-out">
          <h3 className="section-title">SẢN PHẨM ĐÃ HẾT</h3>
          <table className="sold-out-table">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh</th>
                <th>Số lượng</th>
                <th>Tình trạng</th>
                <th>Giá tiền</th>
                <th>Danh mục</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>83826226</td>
                <td>Tủ ly - tủ bát</td>
                <td>
                  <img
                    src="link_to_image.jpg"
                    alt="Ảnh sản phẩm"
                    className="product-image"
                  />
                </td>
                <td>0</td>
                <td>
                  <span className="status-label">Hết hàng</span>
                </td>
                <td>2.450.000 đ</td>
                <td>Tủ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="new-staff">
          <h3 className="section-title">NHÂN VIÊN MỚI</h3>
          <table className="staff-table">
            <thead>
              <tr>
                <th>Họ và tên</th>
                <th>Địa chỉ</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>SĐT</th>
                <th>Chức vụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hồ Thị Thanh Ngân</td>
                <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh</td>
                <td>12/02/1999</td>
                <td>Nữ</td>
                <td>0926737168</td>
                <td>Bán hàng</td>
              </tr>
              <tr>
                <td>Trần Khả Ái</td>
                <td>6 Nguyễn Lương Bằng, Tân Phú, Quận 7, Hồ Chí Minh</td>
                <td>22/12/1999</td>
                <td>Nữ</td>
                <td>0931342432</td>
                <td>Bán hàng</td>
              </tr>
              <tr>
                <td>Nguyễn Đặng Trọng Nhân</td>
                <td>59C Nguyễn Đình Chiểu, Quận 3, Hồ Chí Minh</td>
                <td>23/07/1996</td>
                <td>Nam</td>
                <td>0846881155</td>
                <td>Dịch vụ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="chart-container">
          <div className="monthly-data">
            <h3 className="section-title">DỮ LIỆU HÀNG THÁNG</h3>
            <canvas id="monthlyChart" />
          </div>
          <div className="sales-stats">
            <h3 className="section-title">THỐNG KÊ DOANH SỐ</h3>
            <canvas id="salesChart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueReport;
