
             function cartfunction(){
                var modal=document.getElementById('cartpop');
                var mybtn=document.getElementById("btcart");
                var span = document.getElementsByClassName("close1")[0];
                            
                        mybtn.onclick =function(){
                        modal.style.display="block";
                                }
                                span.onclick = function() {
                                modal.style.display = "none";
                            }
                                window.onclick=function(event){
                                    if(event.target == modal) {
                                        modal.style.display="none";
                                    }
                                }
             }