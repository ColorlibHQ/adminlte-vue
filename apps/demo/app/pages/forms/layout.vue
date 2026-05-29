<template>
  <LteAppContent title="Form Layout" :breadcrumbs="[{ label: 'Forms', href: '#' }, { label: 'Layout' }]">
    <div class="row">
      <div class="col-md-6">
        <LteCard title="Horizontal form">
          <form>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Email</label>
              <div class="col-sm-9"><input type="email" class="form-control" placeholder="Email" /></div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-3 col-form-label">Password</label>
              <div class="col-sm-9"><input type="password" class="form-control" placeholder="Password" /></div>
            </div>
            <div class="row">
              <div class="col-sm-9 offset-sm-3">
                <LteButton type="submit" theme="primary">Sign in</LteButton>
              </div>
            </div>
          </form>
        </LteCard>
      </div>
      <div class="col-md-6">
        <LteCard title="Inline form">
          <form class="d-flex flex-wrap gap-2 align-items-end">
            <LteInput label="Name" fgroup-class="mb-0" />
            <LteInput label="Email" type="email" fgroup-class="mb-0" />
            <LteButton type="submit" theme="primary">Submit</LteButton>
          </form>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
