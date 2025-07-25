$(document).ready(function() {
    // on page load
    var selectedVariantId = $('input[name="id"]').val();
    changeGallery(selectedVariantId);
  
  // on variant
    $('input[name="id"]').on('change', function(event) {
      console.log("id event trigger");
        selectedVariantId = $(this).val();
        changeGallery(selectedVariantId);
    });

  // sold out and comming soon text for category page variants
  var soldText = $('.variant-picker__option.sf__tooltip-item:first');
  updateStockText(soldText);
  $('.variant-picker__option.sf__tooltip-item').on('click', function(event) {
      updateStockText($(this));
  });
});

function updateStockText(variant) {
    var soldText = variant.data('soldtext');
    if (soldText && soldText.trim() != '') {
        setTimeout(function() {
          const text = $('.not-change.atc-text').text();
          if (text.indexOf('Sold') !== -1) {
            $('.not-change.atc-text').text(soldText);
          }
        }, 100);
    }
}

function getSelectedVariant(selectedVariantId) {
  var firstProductId = Object.keys(window._themeProducts)[0];
  var product = window._themeProducts[firstProductId];
  var selectedVariant = product.variants.filter(function(variant) {
    return variant.id == selectedVariantId;
  })[0];
  return selectedVariant;
}

function changeGallery(selectedVariantId) {
  var currentVariant = getSelectedVariant(selectedVariantId);
  $('.check-variant-images.sf-prod-media-item').hide();
  $('.img-'+selectedVariantId).show();
  var selectedSku = currentVariant.sku;
  $('.variant-sku-show').text('SKU: '+selectedSku);
}

function applyCoupon(discountCode) {
    // Setup the Apply Discount Code URL
    let shopDomain = "geckobrands.com";
    let discountApplyUrl = "https://" + shopDomain + "/discount/" + discountCode;
    	
    // Applies discount using hidden iframe to the checkout session
    let i = document.createElement('iframe');
    i.style.display = 'none';
    i.onload = function() { i.parentNode.removeChild(i); };
    i.src=discountApplyUrl;
    document.body.appendChild(i);
}