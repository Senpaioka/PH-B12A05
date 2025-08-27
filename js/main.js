"use strict"

// like button functionality
let totalLike = 0
const likeCount = document.querySelector('.nav__option--life')
likeCount.textContent = totalLike

const cardLikeList = document.querySelectorAll('.service__like')

document.addEventListener('click', function(event){
    if(event.target.classList.contains('service__like')){
        if (event.target.classList.toggle('text-red-500')){
            totalLike += 1
            likeCount.textContent = totalLike
        }else{
            totalLike -= 1
            likeCount.textContent = totalLike
        }
    }
})



// calling functionality

// coin
let coinValue = 100
const coin = document.querySelector('.nav__option--coin')
coin.textContent = coinValue;

// history section
const historySection = document.querySelector('.service__history--items')


// calling button
document.addEventListener('click', function(event){
    
    // get local time 
    const now = new Date();
    const localTime = now.toLocaleTimeString(); 

    const callingButton = event.target.closest('.service__call')
    
    if(!callingButton) return;

    if(coinValue >= 20){
        coinValue -=20
        coin.textContent = coinValue;

        const parentDiv = callingButton.closest('.service__item')
        const serviceName = parentDiv.querySelector('.service__name').textContent
        const servicePhone = parentDiv.querySelector('.service__phone').textContent
        
        const newRecord = `
                        <div class="history__notification flex justify-between items-center bg-gray-100 px-2 py-3 rounded-md my-3">
                            <div class="history__text">
                                <h3 class="hind-madurai-medium text-[var(--color-text-bold)] text-md">${serviceName}</h3>
                                <span class="open-sans-regular text-sm text-[var(--color-text-grey)]">${servicePhone}</span>
                            </div>
                            <div class="history__time">
                                <p class="open-sans-regular text-sm text-[var(--color-text-bold)]">${localTime}</p>
                            </div>
                        </div>
        `

        alert(`You Called: ${serviceName} \n ${servicePhone}`)
        historySection.insertAdjacentHTML('beforeend', newRecord)
        }
        else {
        alert(`Oh No !! You Don't Have Enough Coin To Make a Call
            \n You have ${coinValue} Coin
            \n Please Purchase Coins To Continue.`)
        }

})


// remove all history
const removeButton = document.querySelector('.clear__history')

removeButton.addEventListener('click', () => {
    const clearHistory = removeButton.closest('.service__history')
    if(!clearHistory) return

    if (historySection) {
        historySection.innerHTML = ''
    }
})


// copy button functionality
let copyCount = 0
const copyCounter = document.querySelector('.copy_counter')
copyCounter.textContent = `${copyCount} Copy`


document.addEventListener('click', async function(event){
    
    const copyButton = event.target.classList.contains('copy__number')
    if (!copyButton) return

    // get copied text
    const text = event.target.closest('.service__item').querySelector('.service__phone').innerText;

    // copy counting
    if(!event.target.classList.contains('copied')){
        
        try {
            await navigator.clipboard.writeText(text)
            event.target.textContent = "Copied!"
        } catch (err) {
            console.error("Failed to copy: ", err)
        }

        event.target.classList.add('copied')
        copyCount +=1
        copyCounter.textContent = `${copyCount} Copied`
    }

})




