const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heading__icon = $('.heading__icon');
const infomation_account = $('.infomation_account');
var is_infomation_account = false;
const heading__icon__img = $('.heading__icon__img');
heading__icon.onclick = function()
{
    if(is_infomation_account)
    {
        is_infomation_account = false;
        infomation_account.classList.add('active');
    }
    else{
        is_infomation_account = true;
        infomation_account.classList.remove('active');
    }
}
const question_number_index = $$('.question_number_index');
question_number_index.forEach(function(value,index) {
    value.onclick = function(){
        value.classList.add('question_number--active')
        question_number_index.forEach(function(v,i){
            if(v!==value)
            {
                v.classList.remove('question_number--active')
            }
        })
    }
});