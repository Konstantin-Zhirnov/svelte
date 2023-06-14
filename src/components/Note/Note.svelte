<script>
    import './style.less'

    export let note = ''
    export let index = 1
</script>

<li class={`note-li note-li-${index}`}>
    {note}
</li>