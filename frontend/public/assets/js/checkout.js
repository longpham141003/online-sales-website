document.addEventListener('DOMContentLoaded', function() {
  var steps = document.querySelectorAll('.checkout-step');
  var contents = document.querySelectorAll('.checkout-content-detail');

  steps.forEach(function(step, index) {
    step.addEventListener('click', function() {
      var content = document.getElementById('checkout-content-' + (index + 1));
      var isActive = content.classList.contains('active');
      
      // Đóng tất cả các nội dung
      contents.forEach(function(content) {
        content.classList.remove('active');
      });
      steps.forEach(function(step) {
        step.classList.remove('active');
      });

      // Mở nội dung được chọn
      if (!isActive) {
        content.classList.add('active');
        step.classList.add('active');
      }
    });
  });
});
