#include <bits/stdc++.h>
using namespace std;
#define   Pi     2*acos(0.0)
#define   ll     long long
#define   pb     push_back
#define   mp     make_pair
#define   MAX    500006
#define   MAX1   10000008
#define   mem(a,v)   memset(a,v,sizeof(a))
#define   lcm(a, b)        ((a)*((b)/__gcd(a,b)))

int main(){

freopen("cssTopics.txt", "r", stdin);
freopen("output.txt", "w", stdout);
string s[500];

for(int i=0;i<500;i++)
{
    getline(cin,s[i]);
}

int num;
num=1;
char c;
for(int i=num-1;i<500;i++)
{
    cout<<s[i]<<endl;
    cout<<"Answer Format:"<<endl;
    cout<<"1. Give the definition of this CSS property named the header section \"Definition\" "<<endl;
    cout<<"2. Give all possible values and description in tabular form named the header section \"Values\" "<<endl;
    cout<<"3. Give example data for possible values in css style and comment beside the value named the header section \"Example\" "<<endl;
    cout<<"4. Give details description of this CSS property named the header section \"Description\" "<<endl;
    cout<<"5. Give those property names and difference with this property in tabular form named the header section \"All Most Simillar Properties\" like this |Property| Description| Difference"<<endl;
    cout<<"6. Give a list which browser supports this property in tabular form named the header section \"Browser Compatibility\" "<<endl;
    cout<<"7. Give an example which contains all the values of this property with premium UI named the header section \"Example Code\" "<<endl;
    cout<<"Example Description:"<<endl;
    cout<<"\t -> Create the example with all possible values of this property "<<endl;
    cout<<"\t -> Give a header which values are used for that property and make this centerly aligned "<<endl;
    cout<<"\t -> Keep the main container whitish and make the others component colourful "<<endl;
    cout<<"\t -> Make a container with shadow, border radius:20px curved border, width 80%, centerly aligned so that it looked premium UI"<<endl;
    cout<<"\t -> Make sub container (width:80%;  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.555); border-radius: 20px; background-color: #dcdbdb;) in which contains instance of  properties with different values make a <h2> tag named with that value"<<endl;
    cout<<"Dont add single word out of instruction"<<endl;
    cout<<endl;
}
return 0;


}