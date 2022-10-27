<template>
  <div>
    <h3>Text Input</h3>
    <label for="name">Name</label>
    <input type="text" id="name" v-model="result.name" placeholder="Name">
  </div>

  <div>
    <h3>Number Input</h3>
    <label for="age">Age</label>
    <input type="number" id="age" v-model="result.age" placeholder="Age">
  </div>

  <div>
    <h3>Radio</h3>
    <div>Gender</div>

    <label for="male">Male</label>
    <input type="radio" name="gender" id="male" v-model="result.gender" value="male">

    <label for="female">Female</label>
    <input type="radio" name="gender" id="female" v-model="result.gender" value="female" />
  </div>

  <div>
    <h3>Checkbox</h3>
    <div>Hobby</div>
    <span v-for="hobby in hobbyOptions" :key="hobby">
      <input type="checkbox" :id="hobby" v-model="result.hobbies" :value="hobby">
      <label :for="hobby">{{ hobby }}</label>
    </span>
  </div>

  <div>
    <h3>Password</h3>
    <label for="password">Password</label>
    <input type="password" id="password" v-model="result.password">
  </div>

  <div>
    <h3>Country</h3>
    <label for="country">Country</label>
    <select v-model="result.country" id="country">
      <option v-for="country in countryOptions" :key="country">
        {{ country }}
      </option>
    </select>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { countryOptions, hobbyOptions } from './options';

export default {
  setup() {
    const name = '';
    const age = 0;
    const gender = 'male';
    const hobbies = ['sports'];
    const password = '';
    const country = 'Korea';

    const result = reactive({
      name,
      age,
      gender,
      hobbies,
      password,
      country,
    });

    return {
      result,
      countryOptions,
      hobbyOptions,
    };
  },
};
</script>
