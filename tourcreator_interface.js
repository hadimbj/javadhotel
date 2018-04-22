function Get_Krpano_Var(krpano_var)
{
	var krpano = document.getElementById("krpanoSWFObject");
	return krpano.get(krpano_var);
}

function Call_Krpano_Function(krpano_var)
{
	var krpano = document.getElementById("krpanoSWFObject");
	return krpano.call(krpano_var);
}
function Set_Krpano_Var(krpano_var, krpano_var_val)
{
	var krpano = document.getElementById("krpanoSWFObject");
	return krpano.set(krpano_var, krpano_var_val);
}

function CSharp_Init_Form_Data()
{
	window.external.Init_Form_Data();
}

function CSharp_Navigation_Hotspot_Click(HotspotName)
{
	window.external.Navigation_Hotspot_Click(HotspotName);
}