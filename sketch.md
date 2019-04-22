models
  recipes
    stores brew schedule initially
    eventually stores ingredient name, quantity, and when added.
    maybe store info about when brewed? or would that be a join table somewhere?
    should this be immutable? if it is then it can be referred to by other columns. otherwise I will need to make a new recipe per brew in order to save the actual recipe brewed.

  users
    user data.

  machines
    machine_hardware_id is separate from the generated machine_id. that's ok. maybe make it indexed. idk.

  fermentations
    stores temp data over time.

  brews
    join table between all of the above?
    a recipe is brewed by a user with a machine.
