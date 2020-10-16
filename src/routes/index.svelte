<script>
import _ from 'lodash';
import all from './content/*.md'
import Header from '../components/Header.svelte';

export const mapped = 
_.mapValues(all, (file) => {
	return file.html;
});
</script>
<style>

</style>

<svelte:head>
	<title>Johnny Richardson</title>
</svelte:head>

<Header />

<h3>About</h3>

{@html mapped['0']}

<!-- <h3>Highlights</h3> -->
