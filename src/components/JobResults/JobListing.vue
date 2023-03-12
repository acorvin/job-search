<template>
  <li class="mb-7">
    <router-link
      to="/jobs/results/1"
      class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">Senior Biotech Engineer / Series P Project</h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>VersaLife</span>
          </div>
          <div>
            <span>Los Angeles, California | USA</span>
          </div>
        </div>

        <div class="px-8 py-4">
          <div>
            <h3 class="mt-1 mb-2">Requirements</h3>
            <div>
              <ul class="list-disc pl-8">
                <li>PhD in Biomedical Engineering, Biotechnology, or a related field</li>
                <li>
                  Strong background in biotech tools and techniques, including genetic engineering,
                  nanotechnology, and cybernetics
                </li>
                <li>Proven track record of designing and implementing complex biotech solutions</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link to="/jobs/results/1" class="text-brand-blue-1">Expand</router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'JobListing'
}
</script>

<style scoped></style>
