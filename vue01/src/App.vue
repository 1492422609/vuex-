<template>
  <div>
    <my-addition></my-addition>
    <p>------------------</p>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import AddiTion from "./components/AddiTion";
import SubtracTion from "./components/SubtracTion";
export default {
  components: {
    "my-addition": AddiTion,
    "my-subtraction": SubtracTion,
  },
  data() {
    return {};
  },
};
</script>