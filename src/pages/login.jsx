import React from 'react'


class Login extends React.Component{
	render(){
		return(
<div class="hero min-h-screen bg-base-200" style={{backgroundImage: "url(&quot;https://picsum.photos/id/1005/1600/1400&quot;)"}}>
  <div class="flex-col justify-center hero-content lg:flex-row">
    <div class="text-center lg:text-left">
      <h1 class="mb-5 text-5xl font-bold">
            Hello there
          </h1> 
      <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
    </div> 
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label> 
          <input type="text" placeholder="email" class="input input-bordered"/>
        </div> 
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label> 
          <input type="text" placeholder="password" class="input input-bordered"/> 
          <label class="label">
            <a href="#" class="label-text-alt">Forgot password?</a>
          </label>
        </div> 
        <div class="form-control mt-6">
          <input type="button" value="Login" class="btn btn-primary"/>
        </div>
      </div>
    </div>
  </div>
</div>
		)
	}
}

export default Login