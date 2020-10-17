<script>
import _ from 'lodash';
import all from './content/*.md'
import Header from '../components/Header.svelte';

export const mapped = 
_.mapValues(all, (file) => {
	return file.html;
});
console.log(all)
</script>
<style>
 img {
	 filter: grayscale(100%);
 }
</style>

<svelte:head>
	<title>Johnny Richardson</title>
</svelte:head>

<Header />

<div class="frow row-start">
	<div class="col-md-1-3">
		<h3>About</h3>
		
		{@html mapped['0']}
	</div>
</div>

<div class="frow row-start">
	<div class="col-md-1-2">
<h3>Highlights</h3>
{@html mapped['1']}
</div>
</div>