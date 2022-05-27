<script lang="ts">
    import calendarIcon from "./icons/date-picker-calendar.svg";
    import activeCalendarIcon from "./icons/date-picker-calendar-active.svg";
    import { createEventDispatcher } from "svelte";

    export let start: Date = new Date()
    export let value: Date = new Date()
    export let end: Date = new Date(2049,11,31)
    export let format: 'DD.MM.YYYY' | 'MM.DD.YYYY' | 'MM-DD-YYYY' = 'DD.MM.YYYY'
    export let label = ""

    let minDay: number;
    let minMonth: number;
    let minYear: number;
    let maxDay: number;
    let maxMonth: number;
    let maxYear: number;
    let currentDay: number;
    let currentMonth: number;
    let currentYear: number;
    let dayInMonth: number;
    let icon = calendarIcon;
    let inputValue = '';
    let isOpen = false;
    let calendar: number[] = [];
    let calendarType: 'day' | 'month' | 'year' = 'day'
    let years = []
    let leftArrowDisabled = false
    let rightArrowDisabled = false

    const monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const dispatch = createEventDispatcher()

    $: {
        icon = isOpen ? activeCalendarIcon : calendarIcon;
    }

    $: {
        minDay = start.getDate()
        minMonth = start.getMonth()
        minYear = start.getFullYear()
    }

    $: {
        maxDay = end.getDate()
        maxMonth = end.getMonth()
        maxYear = end.getFullYear()
    }

    $: {
        if ( value > end) {
            value = end;
        }
        if ( value < start) {
            value = start;
        }
    }

    $: {
        currentDay = value.getDate()
        currentMonth = value.getMonth()
        currentYear = value.getFullYear()
    }

    $: {
       dayInMonth = (new Date (currentYear, currentMonth + 1, 0)).getDate() 
    }
    $: {
        const temp = format;
        inputValue = temp
            .replace('DD', currentDay < 10 ? '0' + currentDay : currentDay + '')
            .replace('MM', currentMonth < 9 ? '0' + (currentMonth + 1) : (currentMonth + 1) + '')
            .replace('YYYY', currentYear + '');
    }
    $: {
        if (isOpen && value && currentMonth && currentYear) {
            createCalendar()
        }
    }

    const onBlur = (e) => {
        dispatch('blur', {e, value})
    }

    const onFocus = (e) => {
        dispatch('focus', {e, value})
    }

    const onInput = (e) => {
        isOpen = false

        const divider = (format === 'MM-DD-YYYY') ? '-' : '.'
        const [dayIndex, monthIndex] = format === 'DD.MM.YYYY' ? [0, 1] : [1, 0]

        e.target.value = e.target.value.replace(/[^-.\d]/, '')
        
        if ( e.target.value.length === 2 || e.target.value.length === 5 ) {
            inputValue = e.target.value + divider
        } else {
            inputValue = e.target.value
        }

        if ( e.target.value.length === 10) {
            const splitedInput = inputValue.split(divider)
            const temp = new Date(splitedInput[2] + '-' +   splitedInput[monthIndex] + '-' + splitedInput[dayIndex]);
            if (!isNaN(temp.getDate())) {
                value = temp
            }
        }
        
    }

    const createCalendar = () => {
        calendar = []
        const firstDay = (new Date(currentYear, currentMonth, 1));
        const day = firstDay.getDay() === 0 ? 7 : firstDay.getDay()
         for ( let i = 1; i < day; i++ ) {
            calendar = [0, ...calendar]
        }
        for ( let i = 1; i <= dayInMonth; i++ ) {
            calendar = [...calendar, i]
        }
    }

    const toggleCalendar = () => {
        isOpen = !isOpen
    }

    const onMonthClick = () => {
        calendarType = 'month'
    }

    const onYearClick = () => {
        years = []
        leftArrowDisabled = (currentYear - 10) < minYear
        rightArrowDisabled = (currentYear + 10) > maxYear

        for (let i = currentYear - currentYear % 10; i < currentYear + (10 - currentYear % 10); i++) {
            years = [...years, i];
        }
        calendarType = 'year'
    }

    const setDay = (day) => {
        value = new Date(currentYear, currentMonth, day)
        isOpen = false
    }

    const setMonth = (month) => {
        value = new Date(currentYear, month, currentDay )
        calendarType = 'day'
    }

    const setYear = (year) => {
        value = new Date(year, currentMonth, currentDay)
        calendarType = 'day'
    }

    const setLowerYearRange = () => {
        rightArrowDisabled = false
        years = years.map((year) =>  {
            if ( year - 10 === minYear ) {
                leftArrowDisabled = true;
            }
            return year = year - 10
        })
    }
    
    const setUpperYearRange = () => {
        leftArrowDisabled = false
        years = years.map((year) =>  {
            if ( year + 10 === maxYear ) {
                rightArrowDisabled = true;
            }
            return year = year + 10
        })
    }

    const isMonthDisabled = (month) => {
        return (currentYear === minYear && month < minMonth) || (currentYear === maxYear && month > maxMonth);
    }

    const isDayDisabled = (date) => {
        return (currentYear === minYear && currentMonth === minMonth && date < minDay) || (currentYear === maxYear && currentMonth === maxMonth && date > maxDay);
    }
</script>

<div class="date-picker">
    <label 
        class="label"
    > { label ? label + ':' : '' }
        <input
            value={ inputValue }
            on:input={onInput}
            on:blur={onBlur}
            on:focus={onFocus}
            maxlength="10"
        />
    </label>
    <div class="show-calendar">
        <img src={icon} alt="show calendar" on:click={() => toggleCalendar()}>
        {#if isOpen}
            <div class="calendar">
                <div class="calendar-header">
                    <div class="calendar-month" on:click={onMonthClick}>
                        { monthes[currentMonth] }
                    </div>
                    <div class="calendar-year" on:click={onYearClick}>
                        {currentYear}
                    </div>
                </div>
                <div class="calendar-sheet">
                    {#if calendarType === 'day'}
                        <div class="calendar-days">
                            <div class="calendar-day">
                                Mon
                            </div>
                            <div class="calendar-day">
                                Tue
                            </div>
                            <div class="calendar-day">
                                Wed
                            </div>
                            <div class="calendar-day">
                                Thu
                            </div>
                            <div class="calendar-day">
                                Fri
                            </div>
                            <div class="calendar-day">
                                Sat
                            </div>
                            <div class="calendar-day">
                                Sun
                            </div>
                        </div>
                        <div class="calendar-weeks">
                            {#if calendar.length}
                                {#each calendar as day, i (i) }
                                    <div
                                        class="calendar-day"
                                        class:active={day === currentDay}
                                        class:disabled={isDayDisabled(day)}
                                        on:click={() => !isDayDisabled(day) && setDay(day)}
                                    >
                                        { day ? day : ''}
                                    </div>
                                {/each}
                            {/if}
                        </div>
                    {:else if calendarType === 'month'}
                        <div class="calendar-sheet-monthes">
                            {#each monthes as month, i (i) }
                                <div 
                                    class="calendar-sheet-month" 
                                    class:active={i === currentMonth}
                                    class:disabled={isMonthDisabled(i)}
                                    on:click={() => !isMonthDisabled(i) && setMonth(i)}
                                >
                                {month}
                                </div>
                            {/each}
                        </div>
                    {:else}
                        <div class="calendar-sheet-years-wrapper">
                            <div
                                class="calendar-arrow left"
                                class:disabled={leftArrowDisabled}
                                on:click={!leftArrowDisabled && setLowerYearRange}
                            ></div>
                            <div class="calendar-sheet-years">
                                {#each years as year (year)}
                                <div 
                                    class="calendar-sheet-year" 
                                    class:active={year === currentYear} 
                                    class:disabled={year < minYear || year > maxYear }
                                    on:click={() => year >= minYear && year <= maxYear && setYear(year)}
                                >
                                {year}
                                </div>
                                {/each}
                            </div>
                            <div
                                class="calendar-arrow right"
                                class:disabled={rightArrowDisabled}
                                on:click={!rightArrowDisabled && setUpperYearRange}
                            ></div>
                        </div>
                    {/if}
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .date-picker {
        margin-top: 20px;
        display: flex;
        align-items: center;   
    }
    .label{
        font-size: 14px;
        color: #353535;
        font-weight: 500;
        width: max-content;
    }
    input{
        padding: 6px;
        border: 1px solid #cacaca;
        width: 82px;
        border-radius: 3px;
    }
    input:focus{
        outline: none;
        border-color: #1674E0;
    }
    .show-calendar {
        height: 20px;
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-left: 5px;
        cursor: pointer;
    }
    .calendar {
        position: absolute;
        width: 250px;
        padding: 10px;
        font-size: 14px;
        font-weight: 500;
        bottom: 100%;
        left: 0;
        border: 1px solid #cacaca;
        background-color: #fafafa;
    }
    .calendar-header {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #454545;
    }
    .calendar-month, .calendar-year {
        margin: 2px;
    }
    .calendar-month:hover, .calendar-year:hover, .calendar-weeks .calendar-day:hover, .calendar-sheet-month:hover {
        color: #1674E0;
    }

    .calendar-sheet-years-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .calendar-sheet {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 230px;
        margin: 10px 0;
    }
    .calendar-days, .calendar-weeks, .calendar-sheet-monthes, .calendar-sheet-years {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: #454545;
    }
    .calendar-sheet-monthes {
        justify-content: center;
    }
    .calendar-sheet-years {
        width: 150px;
        justify-content: center;
    }
    .calendar-days .calendar-day {
        background-color: #1674E0;
        color: #fff;
    }
    .calendar-weeks, .calendar-sheet-monthes, .calendar-sheet-years {
        flex-wrap: wrap;
    }
    .calendar-day, .calendar-sheet-month, .calendar-sheet-year {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 1px 2px 0px rgba(22,116,224, 0.4);
    }
    .calendar-day {
        width: 32px;
        height: 32px;
    }
    .calendar-sheet-month {
        width: 48px;
        height: 32px;
    }
    .calendar-sheet-year {
        width: 64px;
        height: 32px;
    }
    .calendar-day.active {
        background-color: rgba(22,116,224, 0.4);
        color: #1674E0;
    }
    .calendar-arrow {
        height: 50px;
        width: 20px;
    }
    .calendar-sheet .disabled, .calendar-sheet .disabled:hover {
        color: #aaa;
    }

    .calendar-arrow.left.disabled {
        background: center / contain no-repeat url('./icons/date-picker-arrow-left.svg');
    }

    .calendar-arrow.left {
        background: center / contain no-repeat url('./icons/date-picker-arrow-left-active.svg');
    }
    .calendar-arrow.right.disabled {
        background: center / contain no-repeat url('./icons/date-picker-arrow-right.svg');
    }

    .calendar-arrow.right {
        background: center / contain no-repeat url('./icons/date-picker-arrow-right-active.svg');
    }
</style>