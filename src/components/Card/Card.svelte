<script>
    import Image from '../Image/Image.svelte'
    import Note from '../Note/Note.svelte'

    import './style.less'

    export let origin = ''
    export let blend_name = ''
    export let variety = ''
    export let notes = ''
    export let intensifier = ''
    export let id = 0
</script>

<li class="card-li">
    <figure>
        <div class="intensifier">{intensifier}</div>
        <div class="img_wrapper">
            <Image id={`image-${id}`}/>
            <div class="loader-wrapper">
                <span class="loader"></span>
            </div>
        </div>
        <figcaption>
            <p class="origin">{origin}</p>
            <p class="blend_name">{blend_name}</p>
            <p class="variety">{variety}</p>
            <ul class="card-ul">
                {#each notes.split(', ') as note, i (note)}
                    <Note {note} index={i + 1}/>
                {/each}
            </ul>
        </figcaption>
    </figure>
</li>