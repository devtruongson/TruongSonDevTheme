// Enhanced Product Info Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add entrance animations
  const animateElements = () => {
    const elements = document.querySelectorAll('.product-info-container > *');
    elements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, index * 150);
    });
  };

  // Variant Button Selection with enhanced animations
  const variantButtons = document.querySelectorAll('.variant-btn');
  variantButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from siblings
      const siblings = this.parentNode.querySelectorAll('.variant-btn');
      siblings.forEach(sibling => {
        sibling.classList.remove('active');
        sibling.style.transform = 'scale(1)';
      });
      
      // Add active class with animation
      this.classList.add('active');
      this.style.transform = 'scale(1.05)';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });

  // Purchase Option Selection
  const purchaseOptions = document.querySelectorAll('.purchase-option');
  const purchaseInputs = document.querySelectorAll('input[name="purchase-type"]');
  
  purchaseOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remove active class from all options
      purchaseOptions.forEach(opt => opt.classList.remove('active'));
      
      // Add active class to clicked option
      this.classList.add('active');
      
      // Check the radio input
      const input = this.querySelector('input[type="radio"]');
      if (input) {
        input.checked = true;
      }
    });
  });

  // Schedule Button Selection
  const scheduleButtons = document.querySelectorAll('.schedule-btn');
  scheduleButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from siblings
      scheduleButtons.forEach(sibling => sibling.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
    });
  });

  // Quantity Selector
  const qtyInput = document.querySelector('.qty-input');
  const minusBtn = document.querySelector('.qty-btn.minus');
  const plusBtn = document.querySelector('.qty-btn.plus');

  if (qtyInput && minusBtn && plusBtn) {
    minusBtn.addEventListener('click', function() {
      let currentValue = parseInt(qtyInput.value);
      if (currentValue > 1) {
        qtyInput.value = currentValue - 1;
      }
    });

    plusBtn.addEventListener('click', function() {
      let currentValue = parseInt(qtyInput.value);
      qtyInput.value = currentValue + 1;
    });

    // Prevent non-numeric input
    qtyInput.addEventListener('input', function() {
      let value = parseInt(this.value);
      if (isNaN(value) || value < 1) {
        this.value = 1;
      }
    });
  }

  // Enhanced Add to Cart Button
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Add loading animation
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.textContent = 'ADDING...';
      
      // Create loading spinner
      const spinner = document.createElement('div');
      spinner.style.cssText = `
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      `;
      
      // Add spinner animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes spin {
          0% { transform: translateY(-50%) rotate(0deg); }
          100% { transform: translateY(-50%) rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
      this.appendChild(spinner);
      
      // Simulate loading and success
      setTimeout(() => {
        this.textContent = 'ADDED TO BAG ✓';
        this.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
        spinner.remove();
        
        // Reset after delay
        setTimeout(() => {
          this.style.background = 'linear-gradient(135deg, #ff4444 0%, #e63939 100%)';
          this.textContent = 'ADD TO BAG';
        }, 2000);
      }, 1500);
    });
  }

  // Enhanced Rating Stars Animation
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    star.addEventListener('mouseenter', function() {
      // Add hover effect to stars up to current index
      for (let i = 0; i <= index; i++) {
        stars[i].style.transform = 'scale(1.2) rotate(10deg)';
        stars[i].style.filter = 'brightness(1.2)';
      }
    });
    
    star.addEventListener('mouseleave', function() {
      // Reset all stars with stagger effect
      stars.forEach((s, i) => {
        setTimeout(() => {
          s.style.transform = 'scale(1)';
          s.style.filter = 'brightness(1)';
        }, i * 50);
      });
    });
  });

  // Parallax effect for benefits section
  const benefitItems = document.querySelectorAll('.benefit-item');
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    benefitItems.forEach((item, index) => {
      const rate = scrolled * -0.5;
      item.style.transform = `translateY(${rate * (index + 1) * 0.1}px)`;
    });
  };

  // Throttled scroll listener
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initialize animations
  setTimeout(animateElements, 300);
});
