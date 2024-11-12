const stripe = Stripe('pk_test_51QJ4moFYYQKwRDwHUUNAT3Irj9Qcxwx3xuShdzHpouOR7HiwILDjVjtafYy5Ly5oRsR1KGJyNi4FlsFv4ovCEWps00X9kXS5l4');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });