// sold out and comming soon text for category page variants
$('.listing-match.product-option-item').each(function(index, element) {
    updateStockTextCollection($(this));
});
$('.listing-match.product-option-item').on('click', function(event) {
    updateStockTextCollection($(this));
});

function updateStockTextCollection(variant) {
    var soldText = variant.data('soldtext');
    var prodId = variant.data('prodid');
    if (soldText == '') {
        soldText = 'SOLD OUT';
    }
    $('.stock-'+prodId).text(soldText);
    $('.soldout-'+prodId).text(soldText);
}