<script lang="ts">
    import Statistic from "$lib/Statistic.svelte";
    import starIcon from '../img/star.svg';

</script>

<div class="statistic-page">
    <h2>Statistic</h2>
    <h3>Statistic default usage</h3>    
    <Statistic name='percentage' value="42" />
    <h3>Statistic units</h3>    
    <Statistic name='speed' units='km / h' value="42" />
    <h3>Statistic default usage</h3>    
    <Statistic name='stars with units' icon={starIcon} value="42" units='stars' />
    <Statistic name='stars' icon={starIcon} value="42" units='' />
</div>