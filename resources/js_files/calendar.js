const destinationDiv = document.getElementById(`city-input-div`)
const destinationSeArchIcon = document.getElementById(`city-icon`)
let destinationInputField = document.getElementById('city-input-field')
const checkinLabel = document.getElementById('checkin-label');
const checkinDate = document.getElementById('checkin-date');
const checkOutLabel = document.getElementById('checkout-label');
const checkOutDate = document.getElementById('checkout-date');
const dateRangeDiv = document.getElementById('date-inpute-div')
const borderLRDiv = document.getElementById('checkin-out-div-side-border')
const calendarIcon = document.getElementById('calendar-icon')
const arrowIcon = document.getElementById('arrow-icon')
const calendarContainer = document.getElementById('calendar-container');
const destinationListDiv = document.getElementById(`destination-list-items`)
const days = document.getElementsByClassName("day")

let destinationSelected = false
let numberOfClickOnDateBtn = 0
let rejected
let activeDay = false

let putCheckIn = true
let putCheckout = true


let fd_City_name
let fd_Check_in
let fd_Check_out
let fd_Total_guest

let checkInInnerNum
let checkOutInnerNum
let hoverInnerNum

let hoverMonth
let hoveredYear

let greenBgDays = []
let rangehoverId = []
let selectedMonths = []
let num = []



function cityInputGreenBg() {
  hideCalendar()
  destinationDiv.classList.add('active_bg');
  destinationDiv.classList.remove('inactive_bg');
  destinationSeArchIcon.classList.add('icon-fill-white');
  destinationSeArchIcon.classList.remove('icon-fill-green');
}
function cityInputRegularBg() {
  // console.log(id)
  destinationDiv.classList.add('inactive_bg');
  destinationDiv.classList.remove('active_bg');
  destinationSeArchIcon.classList.remove('icon-fill-white');
  destinationSeArchIcon.classList.add('icon-fill-green');
}



const checkinOutRegularBg = () => {


  dateRangeDiv.classList.add('side-border')
  dateRangeDiv.classList.remove('side-border-none')

  calendarIcon.classList.remove('icon-fill-white')
  calendarIcon.classList.add('icon-fill-green')

  arrowIcon.classList.remove('icon-fill-white')
  arrowIcon.classList.add('icon-fill-green')

  borderLRDiv.classList?.add('inactive_bg')
  borderLRDiv.classList?.remove('active_bg')

  hideCalendar()
}
const checkinOutgreenBg = () => {
  dateRangeDiv.classList.add('side-border-none')
  dateRangeDiv.classList.remove('side-border')

  borderLRDiv.classList.add('active_bg')
  borderLRDiv.classList.remove('inactive_bg')

  calendarIcon.classList.add('icon-fill-white')
  calendarIcon.classList.remove('icon-fill-green')

  arrowIcon.classList.add('icon-fill-white')
  arrowIcon.classList.remove('icon-fill-green')
  showcalendar()
}

const showCitynameList = () => {
  destinationListDiv.classList.remove('d-hidden');
  destinationListDiv.classList.add('d-shown');
  cityInputGreenBg()
}

const hideCitynameList = () => {
  destinationListDiv.classList.add('d-hidden');
  destinationListDiv.classList.remove('d-shown');
  cityInputRegularBg()
}
hideCitynameList()
const showcalendar = () => {
  calendarContainer.classList.add('d-shown');
  calendarContainer.classList.remove('d-hidden');
}

const hideCalendar = () => {
  calendarContainer.classList.add('d-hidden');
  calendarContainer.classList.remove('d-shown');
}

window.addEventListener('click', function (e) {

  if (document.querySelector('#close-btn').contains(e.target) || document.querySelector('#apply-btn').contains(e.target)) {
    checkinOutRegularBg()
  }

  if (!document.querySelector('.city-input-div').contains(e.target)) {
    hideCitynameList()
  }

  if (document.querySelector('.checkin-out-div-side-border').contains(e.target)) {
    // console.log("clicked in", e.target.id)
  }
  else {
    checkinOutRegularBg()
    console.log(e.target.id)
  }
});

window.addEventListener('load', () => {
  checkinOutRegularBg()
  cityInputRegularBg()
});



// guest increase decrease
const guestNumber = document.getElementById('guest-number')
const guestNumberPlusSign = document.getElementById('guest-number-plus-icon')

function increaseValue() {
  let value = parseInt(guestNumber.innerText, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  value >= 10 ? (
    guestNumber.innerText = 10,
    guestNumberPlusSign.classList.add('guest-ten-plus-sign-flex'),
    guestNumberPlusSign.classList.remove('guest-ten-plus-sign-none'),
    fd_Total_guest = guestNumber.innerText
  ) : (
    guestNumber.innerText = value,
    guestNumberPlusSign.classList.remove('guest-ten-plus-sign-flex'),
    guestNumberPlusSign.classList.add('guest-ten-plus-sign-none'),
    fd_Total_guest = guestNumber.innerText
  );
}

function decreaseValue() {
  let value = parseInt(guestNumber.innerText, 10);
  value = isNaN(value) ? 1 : value;
  value < 1 || value === 0 ? value = 1 : '';
  value--;
  value < 1 || value === 0 ? value = 1 : '';
  value < 10 ? (
    guestNumber.innerText = value,
    guestNumberPlusSign.classList.remove('guest-ten-plus-sign-flex'),
    guestNumberPlusSign.classList.add('guest-ten-plus-sign-none'),
    fd_Total_guest = guestNumber.innerText
  ) : (
    guestNumberPlusSign.classList.add('guest-ten-plus-sign-flex'),
    guestNumberPlusSign.classList.remove('guest-ten-plus-sign-none'),
    fd_Total_guest = guestNumber.innerText
  );
}

// destination city

const allCityName = [
  'Amsterdam',
  'Atlanta',
  'Austin',
  'Barcelona',
  'Boston',
  'Chicago',
  'Dallas',
  'Denver',
  'Detroit',
  'Dubai',
  'Dublin',
  'Edinburgh',
  'Glasgow',
  'Houston',
  'London',
  'Los Angeles',
  'Madrid',
  'Mexico City',
  'Miami',
  'Milan',
  'Minneapolis',
  'Montreal',
  'Nashville',
  'New Orleans',
  'New York City',
  'Nice',
  'Orlando',
  'Ottawa',
  'Palm Springs',
  'Paris',
  'Philadelphia',
  'Phoenix',
  'Rome',
  'San Antonio',
  'San Diego',
  'San Francisco',
  'Savannah',
  'Seattle',
  'Toronto',
  'Vancouver',
  'Venice',
  'Washington D.C.'
]

for (let i = 0; i < allCityName.length; i++) {
  const cityNameDiv = document.createElement("div");
  cityNameDiv.classList.add("destination-city");
  const idForCityDiv = allCityName[i]?.replace(/ /g, '_')
  const newIdForCityName = idForCityDiv.toLowerCase().replaceAll('.', '')
  cityNameDiv.setAttribute("id", newIdForCityName);
  cityNameDiv.innerText = allCityName[i];
  destinationListDiv.appendChild(cityNameDiv);



  cityNameDiv.addEventListener('click', (id) => {
    destinationInputField.value = cityNameDiv.innerText;
    // console.log(inputValueForSearch)
    setInputValueForSearch()
    hideCitynameList()
  })
}

const setInputValueForSearch = () => {
  const cityNameForSearch = destinationInputField.value.toLowerCase().replace(/ /g, '_')
  fd_City_name = cityNameForSearch.toLowerCase().replaceAll('.', '')
  console.log(fd_City_name)
}




// calender

let monthIndex = 0;
const calendar = document.getElementById("calendar");
const monthDisplay = document.getElementById("monthDisplay");
const locale = "en-uk";
const actionButtons = document.getElementById("actionButtons");

// weekdays we need for calculate
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

load();


const controlCheckInField = () => {
  checkOutDate.innerText = ''
  checkOutLabel.classList.add('d-shown')
  checkOutLabel.classList.remove('d-hidden')

  checkinLabel.classList.remove('d-shown')
  checkinLabel.classList.add('d-hidden')
  checkinDate.classList.add('d-shown')
  checkinDate.classList.remove('d-hidden')
}
const controlCheckOutField = () => {
  checkOutLabel.classList.remove('d-shown')
  checkOutLabel.classList.add('d-hidden')

  checkOutDate.classList.remove('d-hidden');
  checkOutDate.classList.add('d-shown');
}


const removeGreenBg = () => {
  for (let i = 0; i < days.length; i++) {
    setTimeout(() => days[i].classList.remove('active-day-active_bg'), 10)
  }
}
const addGreenBg = () => {
  for (let i = 0; i < greenBgDays?.length; i++) {
    setTimeout(() =>
      document.getElementById(greenBgDays[i])?.classList.add('active-day-active_bg'),

      10)
  }
}
const greenBgForCheckInOut = () => {
  for (let i = 0; i < days.length; i++) {
    setTimeout(() => days[i].classList.remove('active-day-active_bg'), 10)
  }
  for (let i = 0; i < greenBgDays?.length; i++) {
    setTimeout(() =>
      document.getElementById(greenBgDays[i])?.classList.add('active-day-active_bg'),
      10)
  }
}

const bgForMultiMonth = () => {
  if (selectedMonths?.length > 2) {
    for (let i = 1; i < selectedMonths.length - 1; i++) {
      for (let p = 1; p < 32; p++) {
        num?.push(selectedMonths[i] + '_' + p)
      }
    }
  }
}

function load() {
  // current date
  const dt = new Date();
  if (monthIndex !== 0) {
    dt.setUTCMonth(new Date().getUTCMonth() + monthIndex);
  }
  // current day, current month index and the year
  const toDay = dt.getUTCDate();
  const month = dt.getUTCMonth();
  const year = dt.getUTCFullYear();
  const todayDate = new Date(year, month, toDay)
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const daysInLastMonth = new Date(year, month, 0).getUTCDate();
  let lastWeekday = lastDayOfMonth.toLocaleDateString(locale, {
    weekday: "long"
  });
  let nextPaddingDays = 6 - weekdays.indexOf(lastWeekday);
  const dateString = firstDayOfMonth.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });

  const paddingDays = weekdays.indexOf(dateString.split(",")[0]);
  const monthInString = `${dt.toLocaleDateString(locale, {
    month: "short"
  })}`

  let selectedMonth = `${dt.toLocaleDateString(locale, {
    month: "long"
  })}`
  monthDisplay.innerText = `${selectedMonth} ${year}`;
  // clear previous html in the calendar
  calendar.innerHTML = "";

  const frag = document.createDocumentFragment();
  for (let i = 1; i <= paddingDays + daysInMonth + nextPaddingDays; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");



    if (i > paddingDays && i <= paddingDays + daysInMonth) {
      daySquare.innerText = i - paddingDays;
      const id = (monthInString + '_' + year + '_' + (i - paddingDays))
      daySquare?.setAttribute("id", id)

      ///////////////////////////////////////////////////////
      // event for date range
      ///////////////////////////////////////////////////


      daySquare.addEventListener('mouseleave', () => {
        if (greenBgDays.length == 2) {
          setRangeBg()
        }
        if (greenBgDays.length == 1) {
          rangehoverId = []
          num = []
          hoverMonth = ''
          setRangeBg()
        }
      })

      daySquare.addEventListener('mouseover', (e) => {

        const selectedDate = new Date(year, month, daySquare.innerText)
        if (greenBgDays.length == 2) {
          setRangeBg()
          return
        }
        if (greenBgDays.length == 1 &&
          (Number(todayDate) > Number(selectedDate)) && (selectedMonths == 1 && checkInInnerNum > checkOutInnerNum)) {
          rangehoverId = []
          num = []

          hoverMonth = ''
          hoveredYear = year
          setIdForRangebg()
          setRangeBg()
        }
        else {
          num = []
          rangehoverId = []
          hoverMonth = ''
          setMonthName(monthDisplay.innerText.substring(0, 3) + '_' + year)
          rangehoverId.push(e.target.id)
          hoveredYear = year
          hoverMonth = monthDisplay.innerText.slice(0, 3)
          hoverInnerNum = parseFloat(daySquare.innerText)
          setIdForRangebg()
          setRangeBg()
        }
      })



      ///////////////////////////////////////////////
      // add click event for each day of the month//
      //////////////////////////////////////////////
      daySquare.addEventListener("click", (e) => {
        const selectedDays = new Date(year, month, daySquare.innerText)
        let selectedMonthNum
        const newSelectedMonthNum = selectedDays.toLocaleDateString(locale, {
          month: "numeric",
        });

        if (newSelectedMonthNum.length === 1) {
          selectedMonthNum = '0' + newSelectedMonthNum;
          // console.log(selectedMonthNum, selectedMonthNum.length)
        } 
        
        else {
          selectedMonthNum = newSelectedMonthNum;
        }

        let selectedDay = daySquare.innerText
        if (daySquare.innerText.length === 1) {
          selectedDay = '0' + selectedDay;
        } else {
          selectedDay = selectedDay;
        }

        const selectedYMD = (year + "-" + selectedMonthNum + "-" + selectedDay)
        numberOfClickOnDateBtn++;
        hideCitynameList()
        checkinOutgreenBg()
        ///////////////////////////////////////////////////////////////////
        const selectedDate = new Date(year, month, daySquare.innerText)
        const selectedDateStr = selectedDate.toLocaleDateString(locale, {
          weekday: "short",
          month: "short",
          day: "numeric"
        });

        for (let i = 0; i < days.length; i++) {
          if (days[i].classList.contains("active-day-active_bg").length > 0) {
            activeDay = true
          }
        }

        ///////////////////////////////////////////////
        // check in day 
        ///////////////////////////////////////////

        if (numberOfClickOnDateBtn == 1) {
          const updateCheckInDay = () => {
            checkinDate.innerText = selectedDateStr
            controlCheckInField();
            setTimeout(() => { localStorage.removeItem('checkInDayInMS') }, 10);
            setTimeout(() => { localStorage.removeItem('checkOutInMS') }, 10);
            setTimeout(() => { localStorage.setItem('checkInDayInMS', Number(selectedDate)) }, 10);
          }

          if (!activeDay && monthIndex >= 0
            && Number(todayDate) < Number(selectedDate)
            && toDay > parseFloat(daySquare.innerText)
            || !activeDay && (!rejected && checkOutDate.innerText === selectedDateStr)
            && numberOfClickOnDateBtn == 1) {
            numberOfClickOnDateBtn = 0;
            rejected = true
            console.log('return')

            // return
          }
          else if (toDay <= parseFloat(daySquare.innerText) || activeDay == true && (parseInt(localStorage?.getItem('checkOutDayInMS')) < Number(selectedDate)) || (greenBgDays.length == 2)
            && greenBgDays[0] == e.target.id || greenBgDays[1] == e.target.id) {
            updateCheckInDay()
            greenBgDays = [];
            hoverMonth = undefined
            rangehoverId = [];
            selectedMonths = [];
            num = []
            setRangeBg();
            greenBgForCheckInOut();
            rejected = false;
            activeDay = true;
            greenBgDays.push(`${e.target.id}`);
            checkInInnerNum = parseFloat(daySquare.innerText)
            fd_Check_in = selectedYMD
            setMonthName(monthDisplay.innerText.substring(0, 3) + '_' + year)
            greenBgForCheckInOut();
            setIdForRangebg();
            setRangeBg();

          }
          else {
            greenBgForCheckInOut();
            greenBgDays = [];
            hoverMonth = undefined
            rangehoverId = [];
            selectedMonths = [];
            num = []

            setRangeBg();
            rejected = false;
            numberOfClickOnDateBtn = 1;
            activeDay = true;
            greenBgDays.push(`${e.target.id}`);
            setMonthName(monthDisplay.innerText.substring(0, 3) + '_' + year)
            checkInInnerNum = parseFloat(daySquare.innerText)
            fd_Check_out = ''
            fd_Check_in = selectedYMD;
            checkInYear = year

            greenBgForCheckInOut();
            updateCheckInDay();
            setIdForRangebg();
            setRangeBg();
          } putCheckIn = false;
        }
        ///////////////////////////////////////////////////////////////////
        // check out date
        //////////////////////////////////////////////////////////////////
        if (numberOfClickOnDateBtn > 2 || numberOfClickOnDateBtn == 2) {
          const selectedCheckOutDay = new Date(year, month, daySquare.innerText)
          if (parseInt(localStorage?.getItem('checkInDayInMS')) > Number(selectedDate)
            || parseInt(localStorage?.getItem('checkInDayInMS') == Number(selectedDate))
            || (monthIndex < 0 && Number(todayDate) > Number(selectedDate))
            || checkinDate.innerText === selectedDateStr) {
            numberOfClickOnDateBtn = 2
            return
          } else {
            activeDay = true
            controlCheckOutField()
            checkOutDate.innerText = selectedDateStr
            setTimeout(() => { localStorage.removeItem('checkOutDayInMS') }, 10);
            setTimeout(() => { localStorage.setItem('checkOutDayInMS', Number(selectedDate)) }, 20);
            setTimeout(() => { checkinOutRegularBg() }, 10);
            putCheckIn = false
            fd_Check_out = selectedYMD
            checkOutYear = year
            greenBgDays.push(`${e.target.id}`)
            checkOutInnerNum = parseFloat(daySquare.innerText)
            setMonthName(monthDisplay.innerText.substring(0, 3) + '_' + year)

            setIdForRangebg()
            bgForMultiMonth()
            setRangeBg()
          }
          greenBgForCheckInOut()
          numberOfClickOnDateBtn = 0
        }
      });

    } else if (i <= paddingDays) {
      daySquare.classList.add("disabaled-date");
      daySquare.classList.remove("day");
    } else {
      daySquare.classList.add("disabaled-date");
      daySquare.classList.remove("day");
    }

    if (i - paddingDays + 1 <= toDay && monthIndex === 0) {
      daySquare.classList.add("disabaled-date")
      daySquare.classList.remove("day");
    }
    frag.appendChild(daySquare);
  }

  calendar.appendChild(frag);
}

const clearCheakinOutDate = () => {
  greenBgDays = []
  rangehoverId = []
  num = []
  selectedMonths = []
  numberOfClickOnDateBtn = 0;
  checkOutYear = new Date().getFullYear()
  checkInYear = new Date().getFullYear()
  checkinDate.innerText = '';
  checkOutDate.innerText = '';

  checkinLabel.classList.add('d-shown');
  checkinLabel.classList.remove('d-hidden');
  checkinDate.classList.remove('d-shown');
  checkinDate.classList.add('d-hidden');

  checkOutLabel.classList.add('d-shown');
  checkOutLabel.classList.remove('d-hidden');

  setTimeout(() => { localStorage.removeItem('checkInDayInMS') }, 20);
  setTimeout(() => { localStorage.removeItem('checkOutDayInMS') }, 20);
  monthIndex = 0;

  load();
  setRangeBg()
}


const controlCheckOutDate = () => {
  if (!activeDay && numberOfClickOnDateBtn == 1 && checkinDate.innerText.length > 0 && checkOutDate.innerText == '') {

    checkOutDate.innerText = ''
    parseInt(localStorage.removeItem('checkOutDayInMS'))
    checkOutLabel.classList.add('d-shown');
    checkOutDate.classList.add('d-hidden');
    checkOutLabel.classList.remove('d-hidden');
    checkOutDate.classList.remove('d-shown');
    numberOfClickOnDateBtn = 0;
    rejected = false
    activeDay = true
    checkinOutRegularBg()
  }


  if (checkinDate.innerText == '' && checkOutDate.innerText == '') {
    return
  }
  else if (rejected == false
    && numberOfClickOnDateBtn == 1
    && activeDay) {

    if (activeDay && parseInt(localStorage.getItem('checkInDayInMS')) >= parseInt(localStorage.getItem('checkInDayInMS'))

    ) {
      setTimeout(() => { checkOutDate.innerText = '' }, 10);
      parseInt(localStorage.removeItem('checkOutDayInMS'))
      checkOutLabel.classList.add('d-shown');
      checkOutDate.classList.add('d-hidden');
      checkOutLabel.classList.remove('d-hidden');
      checkOutDate.classList.remove('d-shown');
      setTimeout(() => { checkinOutRegularBg() }, 10);
      numberOfClickOnDateBtn = 0;
      rejected = false
      activeDay = true
    }
  }
}

const applyCheakinOutDate = () => {
  controlCheckOutDate()
}

const setMonthName = (monthNameNYear) => {
  if (greenBgDays.length == 1) {
    let found = selectedMonths.find(e => e == monthNameNYear)
    if (found) {
      return
    }
    else {
      selectedMonths.push(monthNameNYear)
    }
  }
}

function initButtons() {
  actionButtons.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id === "backButton") {
      console.log('clicked backButton')
      monthIndex--;
      if (greenBgDays.length < 2) {
        selectedMonths.pop()
      }
      if (monthIndex < 0) {
        monthIndex = 0
        setIdForRangebg()
        setRangeBg()
        return
      } else {
        bgForMultiMonth()
        load()
        greenBgForCheckInOut()
        setRangeBg()
      };
    }
    if (id === "nextButton") {
      console.log('clicked nextButton')
      monthIndex++;
      setMonthName(monthDisplay.innerText.substring(0, 3) + '_' + monthDisplay.innerText.slice(-4))
      load();
      bgForMultiMonth()
      greenBgForCheckInOut()
      setRangeBg()
    }
  });
}

///////////////////////////////////////////////
// booking-range-bg
///////////////////////////////////////////

const setIdForRangebg = () => {
  const checkInDayStartStr = greenBgDays[0]?.substring(0, 8)
  const checkOutDayStartStr = greenBgDays[1]?.substring(0, 8)
  const endHoverDay = rangehoverId[0]?.substring(0, 8)
  if (greenBgDays.length == 2 && (checkInDayStartStr !== endHoverDay)) {
    setRangeBg()
  }
  else if ((greenBgDays.length == 1) && checkInDayStartStr === endHoverDay && selectedMonths.length == 1 || monthIndex > 0) {
    num = []
    if (endHoverDay?.length == 8) {
      for (let i = checkInInnerNum; i < parseFloat(hoverInnerNum); i++) {
        num?.push(checkInDayStartStr + '_' + i)
      }
    }
    setRangeBg()
  }

  if (greenBgDays.length == 2 && (checkInDayStartStr !== checkOutDayStartStr)) {

  }
  else if ((checkInDayStartStr === checkOutDayStartStr) && (greenBgDays.length == 1) && selectedMonths.length < 3 && monthIndex >= 0) {
    console.log(selectedMonths)
    num = []
    console.log(hoverInnerNum)
    for (let i = checkInInnerNum; i < checkOutInnerNum; i++) {
      num?.push(checkInDayStartStr + '_' + i)
    }
    setRangeBg()
  }



  if (greenBgDays.length == 1 && checkInDayStartStr == checkOutDayStartStr) {
    num = []
  }

  else if (endHoverDay?.length == 8 && (checkInDayStartStr !== endHoverDay) && (greenBgDays.length == 1) && (selectedMonths.length > 1) && monthIndex >= 0) {
    num = []
    for (let i = checkInInnerNum; i < 32; i++) {
      num?.push(checkInDayStartStr + '_' + i)
    }
    for (let i = 1; i < hoverInnerNum; i++) {
      num?.push(hoverMonth + '_' + hoveredYear + '_' + i)
    }
    setRangeBg()
  }

  ////////////////////////////////////////////////////
  // bg for more then 2 month
  ////////////////////////////////////////////////////


  if (greenBgDays.length == 1 && checkInDayStartStr == checkOutDayStartStr && (checkInDayStartStr !== endHoverDay)) {
    num = []
  }
  else if ((checkInDayStartStr != checkOutDayStartStr) && greenBgDays.length == 2 && selectedMonths.length < 3 && monthIndex > 1) {
    num = []
    for (let i = checkInInnerNum; i < 32; i++) {
      num?.push(checkInDayStartStr + '_' + i)
      console.log('if -3')
    }
    for (let i = 1; i < checkOutInnerNum; i++) {
      num?.push(checkOutDayStartStr + '_' + i)
    }
    setRangeBg()
  }


}

const setRangeBg = () => {
  // console.log(num)
  for (let i = 0; i < days?.length; i++) {
    (days[i])?.classList.remove('booking-range-bg')
    // console.log(i)
  }
  if (num.length > 0) {
    for (let i = 0; i < num?.length; i++) {
      document.getElementById(num[i])?.classList.add('booking-range-bg')
      // console.log(i)
    }
  } else {
    return
  }


}

const setInputValue = (id) => {
  destinationSelected = true;
  hideCitynameList()
  cityInputGreenBg()
  destinationInputField.value = document.getElementById(id).innerText;
}

const setSearchLink = () => {
  fd_Total_guest = guestNumber.innerText
  setInputValueForSearch()
  console.log(fd_City_name, fd_Check_in, fd_Check_out, fd_Total_guest)
  // document.getElementById('search-url').setAttribute('href', `https://www.sonder.com/destinations/${fd_City_name}/search?sleeps=${fd_Total_guest}&check_in_dt=${fd_Check_in}${fd_Check_out == undefined || fd_Check_out == '' ? '' : `&check_out_dt=${fd_Check_out}`}&neighborhood=all_neighborhoods&bedroom_count=0&bed_count=1&bathroom_count=1`)
}

const searchForVacation = () => {
  const guestNumber = parseInt(document.getElementById('guest-number').innerText)
  const checkinDateSearch = checkinDate.innerText
  const checkOutDateSearch = checkOutDate.innerText
  if (checkOutDate.innerText == '' && checkinDate.innerText == '') {
    alert('Your search request can not be complete, please put correct date')
    return
  } else {
    setTimeout(() => { controlCheckOutDate() }, 10)
    setSearchLink()
    console.log(fd_City_name, fd_Check_in, fd_Check_out, fd_Total_guest)
  }
}
initButtons();
load();

