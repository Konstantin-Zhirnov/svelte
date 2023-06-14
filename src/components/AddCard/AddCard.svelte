<script lang="ts">
    import { getCard } from '../../utils.ts'
    import { disableButton } from '../../store.ts'

    import './style.less'

    const handleClick = ():void => {
        getCard()
    }

    let disable: boolean;
    disableButton.subscribe(value => {
        disable = value;
    });

</script>


<li class="li-add">
    {#if !disable}
        <button on:click={handleClick}>+</button>
    {/if}
</li>