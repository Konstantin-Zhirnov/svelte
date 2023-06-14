<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import { cards } from '../../store.ts'
	import { getCard } from '../../utils.ts'
    import type { CardType } from "../../types";

    import AddCard from '../AddCard/AddCard.svelte'
	import Card from '../Card/Card.svelte'

	import './style.less'


	let cardsArray: CardType[];
    cards.subscribe(value => {
    	cardsArray = value;
    });

    let interval

    onMount(() => {
        getCard()
        interval = setInterval(getCard, 30000)}
    );

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<ul class="cards-ul">
    {#each cardsArray as {origin, blend_name, variety, notes, intensifier, id}, i (id)}
        <Card {origin} {blend_name} {variety} {notes} {intensifier} {id} />
    {/each}
    <AddCard/>
</ul>